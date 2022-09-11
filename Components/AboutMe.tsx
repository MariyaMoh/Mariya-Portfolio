import React from 'react';
import { Heading2, Heading4, Heading3 } from './StyleGuide/Text';
import styles from './AboutMe.module.css';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
export default function AboutMe() {
  return (
    <ParallaxLayer
      speed={1}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem',
        alignItems: 'center',
      }}
    >
      <div className={styles.logos}>
       
          <Image
            className="imgg"
            src="/Node.js_logo.svg"
            width={100}
            height={100}
            alt="img"
          />
          <Image
            className="imgg"
            src="/Nextjs-logo.svg"
            width={100}
            height={100}
            alt="img"
          />

          <Image
            className="imgg"
            src="/MongoDB_Logo.svg"
            width={100}
            height={100}
            alt="img"
          />

          <Image
            className="imgg"
            src="/react-Logo.svg"
            width={100}
            height={100}
            alt="img"
          />
       
      </div>
      <div className={styles.container}>
        <div className={styles.AboutMeTitle}>
          <Heading2>About Me</Heading2>
        </div>

        <p>
          Hey ! I ma Mariya , highly-motivated and creative software developer
          with robust problem-solving skills. Passionate about learning and
          consistently advancing my knowledge and skills.
        </p>
      </div>
    </ParallaxLayer>
  );
}
