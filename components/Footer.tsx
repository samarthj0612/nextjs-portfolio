import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'react-feather';

import styles from "@/public/styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.main}>
      <p>
        © 2024 All Rights  Reserved Design & Coded With ❤️
      </p>

      <div className={styles.links}>
        <span>Dribble</span>
        <span>Behance</span>
        <span>Linkedin</span>
        <span>Instagram</span>
        <span>Email</span>
      </div>

      <Link href={"/"}>
        <button className={styles.backToTopBtn}>
          Back to Top
          <ArrowUp />
        </button>
      </Link>
    </div>
  )
}

export default Footer;
