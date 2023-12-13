'use client';
import { useEffect, useState } from 'react';
import styles from './AnimatedText.module.scss';

export const AnimatedText = () => {
  const words = ['Front', 'End', 'Developer'];
  const colors = [styles.blue, styles.purple, styles.green];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const getClassName = (index) => {
    return index === currentWordIndex ? colors[index] : styles.defaultColor;
  };

  return (
    <h1>
      Aspiring{' '}
      <span className={getClassName(0)}>Front</span>-<span className={getClassName(1)}>End</span>{' '}
      <span className={getClassName(2)}>Developer</span> with a passion for creating engaging web experiences.
    </h1>
  );
};