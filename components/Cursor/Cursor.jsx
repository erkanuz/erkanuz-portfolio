'use client';
import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { gsap } from 'gsap/gsap-core';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin'; // Add this import

gsap.registerPlugin(MotionPathPlugin, CSSPlugin);

export const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('h1, h2');

        // Function to handle mouse movement
        const onMouseMove = (event) => {
            const { clientX, clientY } = event;

            // Calculate the center position of the cursor
            const cursorWidth = cursor.offsetWidth;
            const cursorHeight = cursor.offsetHeight;
            const cursorX = clientX - cursorWidth / 2;
            const cursorY = clientY - cursorHeight / 2;

            gsap.to(cursor, { x: cursorX, y: cursorY, duration: 0.2 });
        };

        // Function to handle mouse entering a link
        const onMouseEnterLink = () => {
            gsap.to(cursor, { scale: 4, duration: 0.2 });
        };

        // Function to handle mouse leaving a link
        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
        };

        document.addEventListener('mousemove', onMouseMove);
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach((link) => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return <div id='custom-cursor' className={styles.custom_cursor}></div>;
}