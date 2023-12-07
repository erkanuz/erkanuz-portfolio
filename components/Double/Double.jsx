'use client';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export const Double = ({ projects, reversed}) => {

  const [firstImage, secondImage] = [useRef(null), useRef(null)];
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;

    gsap.to(firstImage.current, { width: `${firstImagePercent}%`, duration: 0.2, ease: 'power2.out' });
    gsap.to(secondImage.current, { width: `${secondImagePercent}%`, duration: 0.2, ease: 'power2.out' });

    if (Math.round(xPercent) === Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    // Cleanup function
    return () => {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    };
  }, []);
  return (
      <div onMouseMove={(e) => manageMouseMove(e)} className={styles.double}>
          <div ref={firstImage} className={styles.imageContainer}>
              <Link href={projects[0].link}>
                  <div className={styles.stretchyWrapper}>
                      <Image
                          src={projects[0].src}
                          fill={true}
                          alt={'image'}
                          className={styles.img}
                          sizes='100%'
                          priority={true}
                      />
                  </div>
              </Link>
              <div className={styles.body}>
                  <h3>{projects[0].name}</h3>
                  <p>{projects[0].description}</p>
              </div>
          </div>
          <div ref={secondImage} className={styles.imageContainer}>
              <Link href={projects[1].link}>
                  <div className={styles.stretchyWrapper}>
                      <Image
                          src={projects[1].src}
                          fill={true}
                          alt={'image'}
                          className={styles.img}
                          sizes='100%'
                          priority={true}
                      />
                  </div>
              </Link>
              <div className={styles.body}>
                  <h3>{projects[1].name}</h3>
                  <p>{projects[1].description}</p>
              </div>
          </div>
      </div>
  )
}
