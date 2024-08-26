'use client';
import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { gsap } from 'gsap/gsap-core';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(MotionPathPlugin, CSSPlugin);

export const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const targets = document.querySelectorAll('[data-target]'); 

        const onMouseMove = (event) => {
            const { clientX, clientY } = event;
            const cursorWidth = cursor.offsetWidth;
            const cursorHeight = cursor.offsetHeight;
            const cursorX = clientX - cursorWidth / 2;
            const cursorY = clientY - cursorHeight / 2;

            gsap.to(cursor, { x: cursorX, y: cursorY, duration: 0.2 });
        };

        const onMouseEnterTarget = () => {
            gsap.to(cursor, { scale: 4, duration: 0.2 });
        };

        const onMouseLeaveTarget = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
        };

        document.addEventListener('mousemove', onMouseMove);
        targets.forEach(target => {
            target.addEventListener('mouseenter', onMouseEnterTarget);
            target.addEventListener('mouseleave', onMouseLeaveTarget);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            targets.forEach(target => {
                target.removeEventListener('mouseenter', onMouseEnterTarget);
                target.removeEventListener('mouseleave', onMouseLeaveTarget);
            });
        };
    }, []);

    return <div id='custom-cursor' className={styles.custom_cursor}></div>;
}