import React from 'react';
import Image from 'next/image';
import styles from './HeroPage.module.css';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  SectionTitle,
} from './StyleGuide/Text';

import { PrimaryButton, SecondaryButton } from './StyleGuide/Button';
import { motion } from 'framer-motion';
import { ParallaxLayer } from '@react-spring/parallax';
export default function HeroPage() {
  return (
    <div className={styles.position}>
      <ParallaxLayer
        speed={2}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '2rem',
          alignItems: 'center',
        }}
      >
        {/* <div className={styles.position}> */}
        {/* <div> */}
        <Heading1>Front-end Developer</Heading1>
        {/* </div> */}
        {/* </div> */}
      </ParallaxLayer>
      <ParallaxLayer
        speed={2}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '2rem',
          alignItems: 'flex-start',
        }}
      >
        <Heading4 as="h1">Mariya ALShaaibi</Heading4>
      </ParallaxLayer>

      <div className={styles.imggg}>
        <Image
          className="imgg"
          src="/arrow.gif"
          width={100}
          height={100}
          alt="img"
        />
      </div>

      {/* <div className={styles.container}>
        <h1 className={styles.title}>
          <div className={styles.word}>
            <div className={styles.char} data-char="F"></div>
            <div className={styles.char} data-char="M">
              M
            </div>
            <div className={styles.char} data-char="a">
              a
            </div>
            <div className={styles.char} data-char="r">
              r
            </div>
            <div className={styles.char} data-char="i">
              i
            </div>
            <div className={styles.char} data-char="y">
              y
            </div>
            <div className={styles.char} data-char="a">
              a
            </div>
            <div className={styles.char} data-char="A">
              A
            </div>
            <div className={styles.char} data-char="L">
              L
            </div>
            <div className={styles.char} data-char="S">
              S
            </div>
            <div className={styles.char} data-char="h">
              h
            </div>
            <div className={styles.char} data-char="a">
              a
            </div>
            <div className={styles.char} data-char="a">
              a
            </div>
            <div className={styles.char} data-char="i">
              i
            </div>
            <div className={styles.char} data-char="b">
              b
            </div>
            <div className={styles.char} data-char="i">
              i
            </div>
          </div>
        </h1>
      </div> */}

      {/* <Image
        className={styles.img1}
        src="/nob.png"
        width={100}
        height={100}
        alt="img"
      /> */}
      {/* <PrimaryButton>CLICK</PrimaryButton>
      <SecondaryButton>dh</SecondaryButton> */}
    </div>
  );
}
