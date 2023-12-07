import React from 'react'
import styles from './style.module.scss'

import { Footer } from '@/sections'
import { Navbar, Cursor, Data } from '@/components'

const page = () => {
  return (
    <div className={styles.projects}>
        <Cursor />
        <Navbar />
        {/* <Data /> */}
        <Footer />
    </div>
  )
}

export default page