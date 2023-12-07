import React from 'react'
import styles from './style.module.scss'

import { projects } from '@/app/api/data'
import { Double } from '@/components/Double'

import { ProjectButton } from '@/components'

export const Best = () => {
  return (
    <div className={styles.best}>
        <h1 className={styles.double_title}>NEW IN FRONT END DEV FIELD WITH MANY TASKS TO REALIZE.</h1>
        <div>
            <Double projects={[projects[0], projects[1]]} />
            <Double projects={[projects[2], projects[3]]} reversed={true} />
        </div>

        <ProjectButton />
    </div>
  )
}
