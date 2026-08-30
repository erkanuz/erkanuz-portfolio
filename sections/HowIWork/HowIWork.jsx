"use client";

import React, { useRef } from "react";
import styles from "./style.module.scss";

import { FcProcess } from "react-icons/fc";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const workSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the goals, requirements and the problem that needs to be solved.",
    icon: <FcProcess />,
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "I collect and analyze data to identify patterns, insights and key opportunities.",
    icon: <FcProcess />,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "I build the right solution, whether it's a dashboard, application or analytical model.",
    icon: <FcProcess />,
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "I test, validate and refine the solution to ensure accuracy, performance and usability.",
    icon: <FcProcess />,
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "I deliver the final solution with clear documentation and support for future improvements.",
    icon: <FcProcess />,
  },
];

const Step = ({ step }) => (
  <div className={`${styles.step} step`}>
    <div className={styles.stepHeader}>
      <span className={styles.number}>
        {step.number}
      </span>

      <span className={styles.stepIcon}>
        {step.icon}
      </span>
    </div>

    <div className={styles.stepContent}>
      <h3>{step.title}</h3>

      <p>{step.description}</p>
    </div>
  </div>
);

export const HowIWork = () => {

  const container = useRef();
  const tl = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.heading', {
      xPercent: -100, opacity: 0, duration: 2,
      scrollTrigger: { trigger: '.heading' }
    })
    gsap.from('.ILS', {
      yPercent: -150, opacity: 0, duration: 3,
      scrollTrigger: { trigger: '.ILS' }
    })
    gsap.from('.IRS', {
      yPercent: 50, opacity: 0, duration: 2,
      scrollTrigger: { trigger: '.IRS' }
    })
    gsap.from('.step', {
      scaleX: 0, opacity: 0, duration: 2, stagger: { each: 0.9, grid: 'auto', from: 'random' },
      scrollTrigger: { trigger: '.step' }
    })
  })

  return (
    <section className={styles.howIWork}>
      <div className={styles.container} ref={container}>

        <div className={styles.intro}>
          <div className={`${styles.heading} heading`}>
            <span className={styles.eyebrow} data-target="target">
              HOW I WORK
            </span>

            <span className={styles.headingLine} />
          </div>

          <h2>
            My Process,
            <br />
            Your Results
          </h2>

          <p>
            A clear and structured approach that helps me
            deliver solutions that are not only functional,
            but also meaningful and impactful.
          </p>
        </div>

        <div className={styles.layout}>
          <div className="ILS">Icon Left Side</div>
          <div className={`${styles.body_of_div} body_of_div`}>

            <div className={styles.top_steps}>
              {workSteps.slice(0, 2).map((step) => (
                <Step key={step.number} step={step} />
              ))}

            </div>

            <div className={styles.middle_step}>
              <Step step={workSteps[2]} />
            </div>

            <div className={styles.bottom_steps}>
              {workSteps.slice(3, 5).map((step) => (
                <Step key={step.number} step={step} />
              ))}
            </div>

          </div>
          <div className="IRS">Icon Right Side</div>
        </div>

      </div>
    </section>
  );
};