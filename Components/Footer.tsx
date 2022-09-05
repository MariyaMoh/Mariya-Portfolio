import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <h4>Linkdin</h4>
        <h4>Github</h4>
      </div>
      {/* <h4 className={styles.Copyright}>&copy; Copyright 2022 Mariya ALShaaibi</h4> */}
    </div>
  );
}
