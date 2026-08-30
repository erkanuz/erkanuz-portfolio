import React from 'react'
import styles from './style.module.scss'

import Link from 'next/link';

export const Elementi = ({ index, name, count, date, desc_title, description, link, setModal, handleHover }) => {
  return (
    <Link
      className={styles.elements}
      href={link}
      passHref
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <div>
        <h2>{count}</h2>
        <p>{date}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.info_proj}>
          <p>{name}</p>
          <p>{description}</p>
        </div>
        <div>
          <p>{desc_title}</p>
        </div>
      </div>
    </Link>
  )
}