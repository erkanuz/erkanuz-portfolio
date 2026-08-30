'use client';
import { useEffect, useState } from 'react';
import styles from './AnimatedText.module.scss';

export const AnimatedText = () => {
  const words = ["SQL", "Power BI", "Excel"];
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
    <p>
      I combine a background in Software Engineering and Banking
      Management with technical skills in{" "}

      <span className={getClassName(0)}>
        SQL
      </span>

      ,{" "}

      <span className={getClassName(1)}>
        Power BI
      </span>

      {" "}and{" "}

      <span className={getClassName(2)}>
        Excel
      </span>

      {" "}to turn data into meaningful insights and build effective
      digital solutions.
    </p>
  );
};