import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'react-feather';

import styles from "@/public/styles/Collaboration.module.css";

const Collaboration = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>
        <div></div>
        Let's talk about a project, collaboration or an idea you may have
      </h1>

      <Link href={"/collaboration"} className={styles.dropBtn}>
        Drop me a line
        <ArrowRight />
      </Link>
    </div>
  )
}

export default Collaboration;
