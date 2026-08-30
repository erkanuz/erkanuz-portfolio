'use client';
import styles from './style.module.scss'

import { AboutIllustration } from './AboutIllustration';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import Marquee from "react-fast-marquee";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react'

import React, { useRef } from 'react';

const iconData = [
    { name: 'excel', type: 'svg', text: 'excel' },
    { name: 'powerBI', type: 'png', text: 'power bi' },
    { name: 'sql', type: 'png', text: 'sql' },
    { name: 'nextjs', type: 'svg', text: 'next.js' },
    { name: 'react', type: 'svg', text: 'react' },
    { name: 'js', type: 'svg', text: 'javascript' },
    { name: 'typescript', type: 'svg', text: 'typescript' },
    { name: 'css', type: 'svg', text: 'css' },
    { name: 'sass', type: 'svg', text: 'sass' },
    { name: 'tailwindcss', type: 'svg', text: 'tailwind css' },
    { name: 'html', type: 'svg', text: 'html' },
    { name: 'figma', type: 'svg', text: 'figma' },
    { name: 'webflow', type: 'png', text: 'webflow' },
    { name: 'git', type: 'svg', text: 'git' },
    { name: 'ms', type: 'svg', text: 'microsoft' },
    { name: 'binance', type: 'png', text: 'binance' },
];


export const Skills = () => {

    const illustrationRef = useRef();
    const scroll_container = useRef();

    gsap.registerPlugin(ScrollTrigger);


    useGSAP(() => {
        gsap.from(".left", {
            opacity: 0,
            x: 300,
            duration: 2,
            scrollTrigger: {
                trigger: ".left",
            },
        });

        gsap.from(".right", {
            opacity: 0,
            x: -300,
            duration: 2,
            scrollTrigger: {
                trigger: ".right",
            },
        });

        const floatingIcons = gsap.utils.toArray(
            "[data-icon]",
            illustrationRef.current
        );

        floatingIcons.forEach((icon, index) => {
            const animations = [
                {
                    y: -12,
                    rotation: 3,
                    duration: 2.8,
                },
                {
                    y: -16,
                    rotation: -4,
                    duration: 3.2,
                },
                {
                    y: -10,
                    rotation: 3,
                    duration: 2.6,
                },
                {
                    y: -14,
                    rotation: -3,
                    duration: 3,
                },
            ];

            const animation = animations[index % animations.length];

            gsap.to(icon, {
                y: animation.y,
                rotation: animation.rotation,
                duration: animation.duration,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: index * 0.3,
            });
        });
    }, {
        scope: illustrationRef,
    });

    return (
        <ReactLenis root>
            <div className={styles.skills} ref={scroll_container}>
                <div className={styles.heading}>
                    <h2 data-target="target">MY TOOLKIT</h2>

                    <span />
                </div>

                <div className={`${styles.iconsContainer} intro`}>
                    <Marquee gradient={false} speed={50} className={styles.marquee}>
                        {iconData.map((icon, index) => (
                            <div key={index} className={styles.iconWrapper}>
                                <img
                                    src={`/icons/${icon.name}.${icon.type}`}
                                    alt={icon.name}
                                    className={styles.icon}
                                />
                                <span className={styles.iconName}>{icon.text}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className={`${styles.aboutContainer} left`}>
                    <div
                        className={styles.illustration}
                        ref={illustrationRef}
                    >
                        <AboutIllustration
                            className={styles.aboutIllustration}
                            floatIconClassName={styles.floatIcon}
                        />
                    </div>

                    <div className={styles.aboutText}>
                        <div className={styles.aboutHeading}>
                            <h3>ABOUT ME</h3>
                            <span />
                        </div>

                        <p>
                            I&apos;m a recent graduate with a Master&apos;s degree in Banking Management and a
                            Bachelor&apos;s degree in Software Engineering. I&apos;m passionate about data, technology
                            and finance, and I enjoy turning complex problems into simple and effective solutions.
                        </p>

                        <p>
                            In my free time, I enjoy playing video games, exploring new technologies, reading books, especially 
                            the humorous Buddhist stories by Ajahn Brahm, and spending time with my cats.
                        </p>

                        <a href="/about" className={styles.readMore}>
                            READ MORE ABOUT ME
                            <MdKeyboardDoubleArrowRight className={styles.icon} />
                        </a>
                    </div>
                </div>

            </div>
        </ReactLenis>
    )
}
