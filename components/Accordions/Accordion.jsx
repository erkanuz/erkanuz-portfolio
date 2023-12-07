import { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import styles from './Accordion.module.scss';

export const Accordion = ({ context }) => {
  const [accordion, setAccordion] = useState();
  const accordionRef = useRef(null);

  const accordionToggle = (index) => {
    if (accordion === index) {
      setAccordion(null);
    } else {
      setAccordion(index);
    }
  };

  const closeAccordionOnOutsideClick = (e) => {
    if (accordionRef.current && !accordionRef.current.contains(e.target)) {
      setAccordion(null);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closeAccordionOnOutsideClick);

    return () => {
      document.body.removeEventListener('click', closeAccordionOnOutsideClick);
    };
  }, []);

  return (
    <div className={styles.accordion_wrapper} ref={accordionRef}>
      {context.map((element, index) => (
        <div className={styles.first_info} key={index}>
          <div className={styles.title} onClick={() => accordionToggle(index)}>
            {element.title}
            <span>{accordion === index ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowUp size={20} />}</span>
          </div>
          <p className={`${styles.description} ${accordion === index ? styles.open : ''}`}>{element.description}</p>
        </div>
      ))}
    </div>
  );
};