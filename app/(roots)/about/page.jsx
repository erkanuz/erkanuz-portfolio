'use client';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './style.module.scss'

import { Navbar, Cursor, Preloader } from '@/components'

const educationData = [
    { title: 'Programming', institution: 'PGHT Akad. N. D. Zelinkski' },
    { title: 'Software Engineer', institution: 'Burgas Free University' },
    { title: 'Web Development', institution: 'Burgas Free University' },
    { title: 'Online Courses', institution: 'Independent Study' },
];

const page = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 4000);
    }, []);
  
    const preloaderComplete = useCallback(() => {
      setIsLoading(false);
    }, []);
    
    return (
        <div className={styles.about}>
            {isLoading && <Preloader currentRoute='/about' onComplete={preloaderComplete} />}
            <Cursor />
            <Navbar />
            <div className={styles.container}>
                <section className={styles.about_container}>
                    <div className={styles.first_image}>
                        <img src="/images/workinglate.svg" alt="" />
                    </div>
                    <div className={styles.header_title}><h1>About me</h1></div>
                    <div className={styles.fir_line}></div>
                    <div className={styles.center_content}>
                        <img src="/images/coding.svg" alt="" />
                        <p>Forging Front-End Futures: Eric, Embracing Challenges and Constant Learning on My Journey</p>
                    </div>
                    <div className={styles.sec_line}></div>
                    <div className={styles.second_image}>
                        <img src="/images/mobile.svg" alt="" />
                    </div>
                </section>

                <section className={styles.about_content}>
                    <div className={styles.about_child}>
                        <h2 className={styles.about_content_title}>Design</h2>
                        <p className={styles.about_content_description}>
                            I’m probably not the typical designer positioned behind an illiustrator artboard adjusting pixels,
                            but i design, immersed in stylesheet tweaking font size and conteplating layouts is where you’ll find me.
                            I’m committed to creating fluent user experiences while staying fashionable.
                        </p>
                    </div>

                    <div className={styles.about_child}></div>

                    <div className={styles.about_child}>
                        <h2 className={styles.about_content_title}>Engineering</h2>
                        <p className={styles.about_content_description}>
                            I create Javascript applications and websites, maybe also mobile applications, as coding tools I prefer
                            to use Visual Code and various tools like spline/teta and libraries like gasp/motion frame and ect.
                        </p>
                    </div>

                    <div className={styles.about_child}>
                        <h2 className={styles.about_content_title}>Personalty </h2>
                        <p className={styles.about_content_description}>
                            If you look at my personalty, I am a person who likes everything to be planned, I don't like to leave
                            unfinished work. In my spare time, I like to play video games or learn new things related to web
                            development. Also i like to play with cats and love them so much.
                        </p>
                    </div>
                </section>

                <section className={styles.about_education}>
                    <div>
                        <p>Embarking on my journey into front-end development, I've dived into the realm of React, Next.js, and SCSS. Through hands-on projects and personal exploration, I've honed my skills in crafting dynamic user interfaces with React, leveraging the power of Next.js for seamless web applications, and adding a touch of style with SCSS. While my professional journey is just beginning, my dedication to mastering these technologies fuels my passion for creating innovative and visually appealing web solutions.</p>
                    </div>

                    <ul className={styles.education_list}>
                        {educationData.map((item, index) => (
                            <li key={index} className={styles.education_item}>
                                <span className={styles.progress_count}></span>
                                <span>{item.title}</span>
                                <span>{item.institution}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={styles.about_footer}>
                    <p>Personal Portfolio &#169; All Rights Reserved By <span>erkanuz</span></p>
                </section>
            </div>
        </div>
    )
}

export default page