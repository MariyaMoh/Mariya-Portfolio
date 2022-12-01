import React from 'react';
import styles from './HeroPage.module.scss';

export default function HeroPage() {
  return (
    <div>
      <div className={styles.position}>
        <div className={styles.NameandPostion}>
          <p className={styles.linesBox}>
            <span className={styles.line1}>
              <b> Mariya ~</b>
            </span>
            <br />
            <span className={styles.line2}>
              <b>ALShaaibi</b>
            </span>
            <br />
            <span className={styles.line3}>
              Front-end
              <img className={styles.star} src="/Star_red.svg" alt="" />
            </span>
            <br />
            <span className={styles.line4}>
              <img className={styles.blob} src="/blob1.svg" alt="" />
              Developer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
