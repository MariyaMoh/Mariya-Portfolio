import React from 'react';
import { About } from '../types';
import styles from './ProjectPage.module.css';
import Image from 'next/image';
import { ParallaxLayer } from '@react-spring/parallax';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  SectionTitle,
} from './StyleGuide/Text';
import { Container } from './StyleGuide/Container';

import { motion } from 'framer-motion';
import { PrimaryButton } from './StyleGuide/Button';
export default function Projects({ abouts }: { abouts: About[] }) {
  return (
    <>
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
        <div className={styles.title}>
          <Heading2 id="Experience">Projects</Heading2>
        </div>

        <div className={styles.MainCon}>
          {abouts.map((about) => (
            <div key={about.id} className={styles.expCards}>
              <div className={styles.proContainer}>
                {/* <div className={styles.icon}>
                <img
                  className={styles.img1}
                  src="/m1.png"
                  width={150}
                  height={150}
                  alt="img"
                />
              </div> */}

                <img className={styles.imggg} src={about.image.url} alt="d" />

                <div className={styles.desc}>
                  <Heading3 className={styles.heading_title}>
                    {about.experienceTitle}
                  </Heading3>

                  <p className={styles.descc}>{about.description}</p>
                </div>
                {/* <PrimaryButton>{about.githubLink}</PrimaryButton> */}
              </div>
            </div>
          ))}
        </div>
      </ParallaxLayer>
    </>
  );
}
