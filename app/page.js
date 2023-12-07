'use client';
import { useEffect, useState, useCallback } from 'react'
import styles from './page.module.scss'

import { Navbar, Cursor, Preloader } from '@/components/index'
import { Hero, Best, Stages, Skills, Contact, Footer } from '@/sections/index' 

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 4000)
  }, []);

  const preloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className={styles.main}>
         {isLoading && <Preloader onComplete={preloaderComplete} />}
         <Cursor />
         <Navbar />
         <Hero />
         <Best />
         <Stages />
         <Skills />
         {/* <Contact /> */}
         <Footer />
    </main>
  )
}