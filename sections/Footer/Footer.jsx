import React from 'react'
import styles from './style.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer} id='footer'>
        <div className={styles.footer_container}>
            <div className={styles.line}></div>
                <div>
                    <p className={styles.footer_copy}>
                      Personal Portfolio &#169; All Rights Reserved By <span>erkanuz</span>
                    </p>
                </div>
        </div>
    </div>
  )
}
