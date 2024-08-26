import React from 'react'
import styles from './style.module.scss'

import Link from 'next/link'

export const NavbarButton = () => {
    return (
        <div className={styles.navbar_button}>
            <button className={styles.talk_button}><a href="/#contacts"><span>LET'S TALK</span></a></button>
        </div>
    )
}

export const ProjectButton = () => {
    return (
        <div className={styles.cn}>
            <Link href='/projects'>
                <button>See more <i></i></button>
            </Link>
        </div>
    )
}

export const SendButton = () => {
    return (
        <button className={styles.send} type="submit">
            <div className={styles.button_text}>
                <span>send</span>
            </div>
        </button>
    )
}