'use client';

import React from 'react'
import styles from './style.module.scss'

import { useModal } from '@/hooks';
import { ServiceModal } from '@/components';

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

  return (
    <div className={styles.services}>
      <div>
        <h1 className={styles.service_title}>SERVICES /</h1>
      </div>

      <div className={styles.gridContainer}>
        <div onClick={() => handleOpenModal('WEB DEVELOPMENT')}>
          <h2>WEB DEVELOPMENT</h2>
        </div>
        <div onClick={() => handleOpenModal('WEB DESIGN')}>
          <h2>WEB DESIGN</h2>
        </div>
      </div>

      {isOpen && <ServiceModal isOpen={isOpen} closeModal={closeModal} content={content} />}
    </div>
  )
}
