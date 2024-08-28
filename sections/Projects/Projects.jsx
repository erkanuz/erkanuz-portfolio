"use client";
import React, { useState, useRef } from "react";
import styles from "./style.module.scss";

import { projects } from "@/app/api/data";

import { CustomeModal, Elementi } from "@/components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

export const Projects = () => {
  const [modal, setModal] = useState({ acive: false, index: 0 });

  const [visibleProjects, setVisibleProjects] = useState(3);

  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
  };

  // Function to generate a random color
  const getRandomColor = () =>
    `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`;

  // Function to handle hover events and update modal state and background color
  const handleHover = (index) =>
    setModal({ active: true, index }) || setBackgroundColor(getRandomColor());

  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.proj_content', {
      opacity: 0,
      y: 300,
      duration: 2,
      scrollTrigger: {
        trigger: '.proj_content'
      }
    })
  })

  return (
    <section className={styles.proj_base} ref={container}>
      <div className={`${styles.proj_content} proj_content`}>
        <h2 className={styles.proj_title}>
          @My favourite 4 <br /> projects !
        </h2>
        <p className={styles.proj_subtitle}>
          I’ll do my best to deliver solutions that fit your needs and support
          your brand’s story. I’ll work closely with you to understand your vision
          and ensure my work supports your goals. My focus is on providing
          high-quality results that help tell your story and contribute to your
          success.
        </p>
      </div>

      <div className={styles.mainBox}>
        <div className={styles.body}>
          {projects.slice(0, visibleProjects).map((project, index) => {
            return (
              <Elementi
                key={index}
                index={index}
                name={project.name}
                date={project.date}
                desc_title={project.desc_title}
                description={project.description}
                link={project.link}
                tech={project.tech}
                setModal={setModal}
                handleHover={handleHover}
              />
            );
          })}
          {visibleProjects < projects.length && (
            <button onClick={loadMoreProjects}>LOAD MORE</button>
          )}
        </div>
      </div>
      {modal.active && (
        <CustomeModal
          modal={modal}
          projects={projects}
          backgroundColor={backgroundColor}
        />
      )}
    </section>
  );
};
