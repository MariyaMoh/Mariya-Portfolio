import React from 'react';
import { Heading2, Heading4, Heading3 } from './StyleGuide/Text';
import styles from './AboutMe.module.css';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
export default function AboutMe() {
  return (
    <div className={styles.mainCointainer}>
      {/* <div className={styles.AboutMeTitle}>
        <Heading2>About Me</Heading2>
      </div> */}
      <div className={styles.aboutMePage} id="AboutMe">
        {/* <div className={styles.boxRed}></div>
        <div className={styles.boxGreen}></div>
        <div className={styles.boxBlue}></div> */}
        <div className={styles.aboutMeLines}>
          <p>
            <span className={styles.line1}>
              Hi <b>~</b>
            </span>{' '}
            <br />
            <span className={styles.line2} data-aos="fade-right">
              I am{' '}
              <span className={styles.myName}>
                {'  '}
                <b>Mariya</b>{' '}
              </span>{' '}
              <img className={styles.star} src="/Star_red.svg" alt="" />
            </span>{' '}
            <br />
            <span className={styles.line4} data-aos="fade-right">
              a creative
            </span>{' '}
            <br />
            <span className={styles.line5} data-aos="fade-right">
              <b>Front-end developer</b>
            </span>
            <img className={styles.blob} src="/blob1.svg" alt="" />
            <br />{' '}
            <span className={styles.line6} data-aos="fade-right">
              <b>Passionate </b>about
            </span>{' '}
            <br />{' '}
            <span className={styles.line7} data-aos="fade-right">
              learning <b> &</b> consistently{' '}
            </span>
            <br />
            <span className={styles.line8} data-aos="fade-right">
              {' '}
              <img className={styles.blob} src="/blob4.svg" alt="" />
              advancing my{' '}
            </span>{' '}
            <br />
            <span className={styles.line9} data-aos="fade-right">
              knowledge <b>&</b> skills.
            </span>
          </p>
        </div>
        <div className={styles.Blob1}> </div>
        <div className={styles.OutlineBlob1}> </div>
        <div className={styles.OutlineBlob12}> </div>
        <div className={styles.Blob2}> </div>
        <div className={styles.OutlineBlob2}> </div>
        <div className={styles.OutlineBlob22}> </div>
      </div>
    </div>
  );
}
