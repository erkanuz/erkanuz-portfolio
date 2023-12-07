'use client';
import React, { useEffect, useRef, useState} from 'react'
import styles from './style.module.scss'

import { gsap } from 'gsap/gsap-core'

const start = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
const end = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';

export const Preloader = () => {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);

  const [index, setIndex] = useState(0);
  const words = ["welcome", "to", "my", "personal", "portfolio"]

  useEffect(() => {
    const delay = index === 0 ? 1000 : 200;

    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === words.length - 1 ? prevIndex : prevIndex + 1));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [index]);

  const animate = () => {
    const tl = gsap.timeline();

    tl.to(preloaderRef.current, {
      duration: 0.9,
      attr: {
        d: start,
      },
      ease: "Power2.easeIn",
    }).to(preloaderRef.current, {
      duration: 0.9,
      attr: {
        d: end,
      },
      ease: "Power2.easeOut",
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      display: 'none',
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div ref={containerRef} className={styles.introduction}>
        <svg viewBox='0 0 100 100' preserveAspectRatio='none'>
            <path
                ref={preloaderRef}
                className={styles.path}
                strokeWidth='2px'
                dur='10s'
                vectorEffect='non-scaling-stroke'
                d='M 0 100 V 100 Q 50 100 100 100 V 100 z'
              />
        </svg>
        <p>{words[index]}</p>
    </div>
  );
};