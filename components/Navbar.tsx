import React from 'react';
import Link from 'next/link';
import { LogIn } from 'react-feather';

import styles from "../public/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/home"} className={styles.name}>
        Samarth Jain
      </Link>

      <div className={styles.links}>
        <Link href={"/about"}>
          About
        </Link>
        <Link href={"/work"}>
          Work
        </Link>
        <Link href={"/process"}>
          Process
        </Link>
        <Link href={"/contact"}>
          Drop me a line
        </Link>
      </div>

      <Link href={"/login"} className={styles.loginBtn}>
        Login
        <LogIn />
      </Link>
    </div>
  )
}

export default Navbar;
