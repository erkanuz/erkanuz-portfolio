import React from 'react'
import styles from './style.module.scss'

import Link from 'next/link';

export const Elementi = ({ index, name, date, desc_title, description, link, setModal, handleHover }) => {
  return (
    <Link 
      className={styles.elements} 
      href={link} 
      passHref
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={() => setModal({ active: false, index })}
      >
      <div>
        <h2>{name}</h2>
        <p>{date}</p>
      </div>
      <div className={styles.info_proj}>
        <p>{desc_title}</p>
        <p>{description}</p>
      </div>
    </Link>
  )
}