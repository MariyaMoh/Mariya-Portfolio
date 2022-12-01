import React from 'react';
import Image from 'next/image';
import styles from './HeroPage.module.css';
import { Heading1, Heading4 } from './StyleGuide/Text';

import { ParallaxLayer } from '@react-spring/parallax';
export default function HeroPage() {
  return (
    <div className={styles.position}>
      <ParallaxLayer
        speed={2}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <header className={styles.name}>
          <Heading4 as="h1">Mariya ALShaaibi</Heading4>
        </header>
        <Heading1>Front-end Developer</Heading1>
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
        <div className={styles.imggg}>
          <Image
            className="imgg"
            src="/arrow.gif"
            width={100}
            height={100}
            alt="img"
          />
        </div>
      </ParallaxLayer>
    </div>
  );
}
