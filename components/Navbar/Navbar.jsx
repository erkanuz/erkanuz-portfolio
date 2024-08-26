'use client';
import React, { useState, useRef, useEffect } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import styles from './style.module.scss'

import NavbarModal from './NavbarModal';

const menuLinks = [
  { id: 1, title: "{ ...HOME }", link: '/' },
  { id: 2, title: "{ ...ABOUT }", link: '/about' },
  { id: 3, title: "{ ...PROJECTS }", link: '/projects' },
]

const socialLinks = [
  { id: 1, title: "LinkedIn", to: 'https://www.linkedin.com/in/erkan-uz-lil/' },
  { id: 2, title: "Codewars", to: 'https://www.codewars.com/users/%20Qixing' },
  { id: 3, title: "Github", to: 'https://github.com/erkanuz' },
  { id: 4, title: "Leetcode", to: 'https://leetcode.com/_erkan/' },
]

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if there is an anchor in the URL
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set(".menu_link_item_holder", { y: 75 });
    gsap.set(".social_items", { x: -100 });
    gsap.set(".show_reels", { x: -200 });

    tl.current = gsap.timeline({
      paused: true
    })
      .to(".menu_overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to(".menu_link_item_holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      })
      .to(".social_items", {
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      })
      .to(".show_reels", {
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      })
  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.menu_container} ref={container}>

      {/*TOP MENU*/}
      <nav className={styles.menu_bar}>
        
        {/*LOGO*/}
        <div className={styles.menu_logo}>
          <Link href={"/"} className={styles.logo}>
            <img src="/logo.png" alt="Logo" style={{height: '60px', width: '60px', borderRadius: '50%'}}/>
            <p>Erkan</p>
          </Link>
        </div>

        {/*NAVBAR BUTTON*/}
        <div className={styles.nav_button}
        onClick={toggleMenu}>
          <div onClick={() => setIsActive(!isActive)} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
          </div>
          <p className={styles.invisable}>Menu</p>
        </div>

      </nav>

      {/*NAVBAR_MODAL*/}
      <NavbarModal menuLinks={menuLinks} socialLinks={socialLinks} className={isMenuOpen ? styles.active : ''} />

    </header>
  )
}