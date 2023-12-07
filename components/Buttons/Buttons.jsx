import React from 'react'
import styles from './style.module.scss'

import Link from 'next/link'
import { LuBadgeCheck } from 'react-icons/lu'
import { PiArrowBendDownRightBold } from 'react-icons/pi'

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
                <button>See more <i><PiArrowBendDownRightBold/></i></button>
            </Link>
        </div>
    )
}

export const SendButton = () => {
    return (
        <div className={styles.send}>
            <button type="submit">
                send <i><LuBadgeCheck/></i>
            </button>
        </div>
    )
}