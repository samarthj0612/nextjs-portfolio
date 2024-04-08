import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

import styles from "@/public/styles/Home.module.css";

const Hero = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Digital</h1>

      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Designer</h1>
        <h4>
          <span>Frontend Developer</span><br />
          <span>Backend Developer</span><br />
          <span>Reactjs Developer</span><br />
          <span>Android Developer</span><br />
        </h4>
      </div>

      <div className={styles.descriptionContainer}>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis illo voluptas delectus amet eaque, esse nostrum accusamus et corporis quos consequatur. Saepe nam eligendi corporis id iure error unde quibusdam magnam itaque maiores reiciendis laboriosam suscipit!</p>
        {/* <div>
          <span>Html</span><br />
          <span>Css</span><br />
          <span>Js</span><br />
        </div> */}
      </div>

      <Link href={"/home"}>
        <button className={styles.dropBtn}>
          Drop me a line
          <ArrowRight />
        </button>
      </Link>
    </div>
  )
}

export default Hero;
