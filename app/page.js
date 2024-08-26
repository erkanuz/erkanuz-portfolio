'use client';
import { useEffect, useState, useCallback } from 'react'
import styles from './page.module.scss'

import { Navbar, Cursor, Preloader, ScrollToTopButton } from '@/components/index'
import { Hero, Projects, Stages, Skills, Contact, Footer, Paralax, Services } from '@/sections/index' 

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000)
  }, []);

  const preloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className={styles.main}>
         {isLoading && <Preloader currentRoute="/" onComplete={preloaderComplete} />}
         <Cursor />
         <Navbar />
         <Hero />
         <Projects />
         <Paralax />
         <Services />
         <Stages />
         <Skills />
         <Contact />
         <ScrollToTopButton />
         <Footer />
    </main>
  )
}