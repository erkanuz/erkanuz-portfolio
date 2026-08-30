'use client';
import { useEffect, useState, useCallback } from 'react'
import styles from './page.module.scss'

import { Navbar, Cursor, Preloader, ScrollToTopButton } from '@/components/index'
import { Hero, Projects, Skills, Footer, Paralax, Main, Education, Expertise, HowIWork, ContactMe } from '@/sections/index' 
import { Text } from '@/components/Text';

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
         <Main />
         <Education />
         <Projects />
         <Paralax />
         <HowIWork />
         <Expertise />
         <Skills />
         <ContactMe />
         <Text />
         <ScrollToTopButton />
         <Footer />
    </main>
  )
}