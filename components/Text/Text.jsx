'use client';
import React, { useEffect , useRef } from 'react'
import styles from './style.module.scss'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export const Text = () => {

    const [firstText, secondText, slider] = [useRef(null), useRef(null), useRef(null)];
    let [xPercent, direction] = [0, -1];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animation = () => {
            xPercent = (xPercent < -100) ? 0 : (xPercent > 0) ? -100 : xPercent;
            if (slider.current) {
                gsap.set(slider.current, { xPercent });
            }
            requestAnimationFrame(animation);
            xPercent += 0.065 * direction;
        };

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        });

        // Check if slider.current is defined before starting the animation
        if (slider.current) {
            animation();
        }

        // Cleanup function to cancel animation on component unmount
        return () => {
            gsap.killTweensOf(slider.current);
            ScrollTrigger.getAll().forEach(instance => instance.kill());
        };
    }, []);

  return (
    <div className={styles.firstPage}>
        <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
                <p ref={firstText}>IF YOU WANNA TO HIRE ME LET'S TALK</p>
                <p ref={secondText}>IF YOU WANNA TO HIRE ME LET'S TALK</p>
            </div>
        </div>
    </div>
  )
}
