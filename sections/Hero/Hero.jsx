'use client';
import React from 'react'
import styles from './style.module.scss'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiCodewars, SiLeetcode } from "react-icons/si";

import Link from 'next/link'
import { AnimatedText, MagneticIcon } from '@/components';

const SocialLink = ({ href, icon }) => (
  <Link href={href}>
    <MagneticIcon>
      <i>{icon}</i>
    </MagneticIcon>
  </Link>
);

export const Hero = () => (
  <div className={styles.wrapper}>
    <main>
      <div className={styles.first_content}>
        <div className={styles.left_side}>
          <div className={styles.article}>
            <img src="/images/clouds.png" alt="" className={styles.image} />
            <AnimatedText />
          </div>

          <div className={styles.mini_box}>
            <div className={styles.socials}>
              <SocialLink href="https://github.com/erkanuz" icon={<AiFillGithub />} />
              <SocialLink href="https://www.linkedin.com/in/erkan-uz-lil/" icon={<AiFillLinkedin />} />
              <SocialLink href="https://www.codewars.com/users/%20Qixing" icon={<SiCodewars />} />
              <SocialLink href="https://leetcode.com/_erkan/" icon={<SiLeetcode />} />
            </div>

            <div className={styles.based}>CURRENTLY BASED <br /> IN BURGAS, BULGARIA</div>
          </div>
        </div>

        <div className={styles.right_side}>
          <img src="/images/office.svg" alt="" className={styles.img} />
        </div>
      </div>

      <div className={styles.second_content}>
        <a href='#footer' className={styles.scroll}>
          <div className={styles.circle_inner}>
            <div className={styles.scroll_down}></div>
          </div>
        </a>
      </div>

      <div className={styles.third_content}>
        <h2>ERKAN UZUNHALIL</h2>

        <div className={styles.line}>
          <div></div>
          <MagneticIcon><i><AiFillGithub /></i></MagneticIcon>
          <div></div>
        </div>
        
      </div>
    </main>
  </div>
);