import React from 'react';
import { Plus } from 'react-feather';

import styles from "@/public/styles/Expertise.module.css";

const Expertise = () => {
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.heading}>My way of getting things done</h1>
        <p>Feet and transparent the path to showing a website that will represent your trend is the best of light is only 4 works away. Standing by hte wonderful methodology. I assume a step by step completion of the whole process</p>
      </div>

      <div>
        {["UX / Wireframing", "Web Design", "Web Development", "Analytics Setup / Support"].map((project, i) => {
          return (
            <div key={i + 1} className={styles.project}>
              <h1>
                0{i + 1}. {"  "} {project}
              </h1>
              <Plus />
            </div>)
        })}
      </div>
    </div>
  )
}

export default Expertise;
