import { useState, useEffect, useRef } from "react";
import styles from "./Accordion.module.scss";

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
    document.body.addEventListener("click", closeAccordionOnOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeAccordionOnOutsideClick);
    };
  }, []);

  return (
    <div className={`${styles.accordion_wrapper} left`} ref={accordionRef}>
      {context.map((element, index) => (
        <div className={styles.first_info} key={index}>
          <div className={styles.title} onClick={() => accordionToggle(index)}>
            {element.title}
            <span>
              {accordion === index ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14L12 6L20 14"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10L12 18L20 10"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              )}
            </span>
          </div>
          <p
            className={`${styles.description} ${accordion === index ? styles.open : ""
              }`}
          >
            {element.description}
          </p>
        </div>
      ))}
    </div>
  );
};