import React from 'react'
import styles from './style.module.scss'

import { FiLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

const getProjects = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/projects`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    // console.log('Data received from API:', data);

    return data?.projects ? data : { projects: [] };
  } catch (error) {
    console.log("Error loading projects: ", error);
    return { projects: [] };
  }
};

export const Data = async () => {
  const { projects } = await getProjects();

  if (!projects || projects.length === 0) {
    return <p>No projects found.</p>;
  }
  return (
    <div className={styles.database}>
      <div className={styles.projects__container}>
        {projects.map((element) => (
          <div key={element._id} className={styles.projects__article}>
            <img src={element.image} alt="image" className={styles.projects__img} />

            <div className={styles.projects__data}>
              <span>{element.description}</span>
              <h2 data-target="target">{element.title}</h2>
              <p>
                <a href={element.url} className={styles.projects__button}>Read more <IoLogoGithub /></a>
                <a href={element.link} className={styles.projects__button}> Website <FiLink /></a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
