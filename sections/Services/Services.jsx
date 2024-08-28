'use client';

import React, { useRef } from 'react'
import styles from './style.module.scss'

import { useModal } from '@/hooks';
import { ServiceModal } from '@/components';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

export const Services = () => {
  const { isOpen, openModal, closeModal, content } = useModal();

  const handleOpenModal = (service) => {
    const modalContent = {
      'WEB DEVELOPMENT': {
        title: 'Web Development',
        description: `- Custom Web Development
                          - Responsive Design
                          - Intuitive Prototyping and Design
                          - 3D and Interactive Graphics
                          - Comprehensive Development Solutions`,
      },
      'WEB DESIGN': {
        title: 'Web Design',
        description: `- Custom UI/UX Design
                          - Responsive and Accessible Design
                          - Graphic Design and Illustration
                          - Collaborative Design Process`,
      },
    };
    openModal(modalContent[service]);
  };

  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.first', {
      opacity: 0,
      x: 300,
      duration: 2,
      scrollTrigger: {
        trigger: '.first'
      }
    })
    gsap.from('.second', {
      opacity: 0,
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: '.second'
      }
    })
  })

  return (
    <div className={styles.services} ref={container}>
      <div>
        <h1 className={styles.service_title}>SERVICES /</h1>
      </div>

      <div className={styles.gridContainer}>
        <div className='first' onClick={() => handleOpenModal('WEB DEVELOPMENT')}>
          <h2>WEB DEVELOPMENT</h2>
        </div>
        <div className='second' onClick={() => handleOpenModal('WEB DESIGN')}>
          <h2>WEB DESIGN</h2>
        </div>
      </div>

      {isOpen && <ServiceModal isOpen={isOpen} closeModal={closeModal} content={content} />}
    </div>
  )
}
