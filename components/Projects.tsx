import React from 'react';

import projects from "@/data/projects";
import styles from "@/public/styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.main}>
      <nav>
        <h2>Selected Work</h2>
        <p>A piece from my selection of favourites</p>
      </nav><hr />

      <div className={styles.projects}>
        {projects.map((project) => {
          return (
            <div key={project.idx} className={styles.project}>
              <div>
                <h1>{project.heading}</h1>
                <h6>{project.description}</h6>
              </div>

              <h1>
                /{project.year}
              </h1>
            </div>)
        })}
      </div>

      <div className={styles.seeMore}>
        <h1>Want to see more?</h1>
        <p>Reach me out at brandsmashers.com</p>
      </div>
    </div>
  )
}

export default Projects;
