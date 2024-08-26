import { Slider } from '@/components'
import React from 'react'
import styles from "./style.module.scss";

const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Paralax = () => {
  return (
    <div className={styles.section_paralax}>
        <Slider slides={SLIDES} options={OPTIONS} />
    </div>
  )
}
