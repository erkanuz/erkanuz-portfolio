'use client';
import { useState, useEffect } from 'react';
import styles from './style.module.scss'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import TimeDisplay from './TimeDisplay';

import { NavbarButton } from '../Buttons';

const NavbarItems = [
    { id: 1, title: "{ ...HOME }", link: '/' },
    { id: 2, title: "{ ...ABOUT }", link: '/about' },
    { id: 3, title: "{ ...PROJECTS }", link: '/projects' },
  ]

export const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if there is an anchor in the URL
    const hash = window.location.hash;
    if (hash) {
      // Find the target element by ID (in this case, 'contacts')
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>Erkan</a>

      <nav>
        <ul>
          {NavbarItems.map(item => (
            <li key={item.id}>
              <Link href={item.link}>
                <span className={pathname === item.link ? styles.active : ''}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <span className={styles.time_display}><TimeDisplay /></span>

      <NavbarButton />

      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
      </div>

      <div className={`${styles.menu} ${isActive ? styles.open : ''}`}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.second_header}>
              <p>Navigation</p>

              {NavbarItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <span className={pathname === item.link ? styles.active : ''}>{item.title}</span>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}