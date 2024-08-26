import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss'

export const ServiceModal = ({ isOpen, closeModal, content }) => {
  const modalRef = useRef();
  const backgroundRef = useRef();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(modalRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: 'power4.out' });
      gsap.to(backgroundRef.current, { opacity: 1, duration: 0.3, ease: 'power4.out' });
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: 'power4.in',
      onComplete: closeModal,
    });
    gsap.to(backgroundRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power4.in',
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={handleClose}>X</button>
        <div className={styles.content}>
          <h1>{content.title}</h1>
          <div>
            {content.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};