import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import gsap from 'gsap';

export const CustomeModal = ({ modal, projects, backgroundColor }) => {
  const { index } = modal;
  const project = projects[index];

  const container = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" });
    const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Get modal dimensions (ensure the dimensions are correct)
      const modalWidth = container.current.offsetWidth;
      const modalHeight = container.current.offsetHeight;

      // Calculate positions to center modal on the cursor
      const offsetX = clientX - modalWidth / 2;
      const offsetY = clientY - modalHeight / 2;

      moveContainerX(offsetX);
      moveContainerY(offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={container} className={styles.modalContainer}>
      <Image
        src={project.src}
        width={300}
        height={0}
        alt='image'
      />
      <div className={styles.modal} style={{ backgroundColor }}>
        <p>{project.tech}</p>
      </div>
    </div>
  );
}