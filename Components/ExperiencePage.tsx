import React from 'react';
import { Experience } from '../types';
import styles from './ExperiencePage.module.css';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import {
  Heading1,
  Heading2,
  Heading4,
  Heading3,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Container } from '../Components/StyleGuide/Container';

export default function ExperiencePage({
  experiences,
}: {
  experiences: Experience[];
}) {
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
      <div className={styles.title}>
        <Heading2 as="h1" id="Experience">
          Experience
        </Heading2>
      </div>
      <div className={styles.expContainer}>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="4000"
          className={styles.expCards}
        >
          {experiences.map((experiences) => (
            <div key={experiences.id} className={styles.box}>
              <div className={styles.icon} data-aos="zoom-in-up">
                <img
                  src={experiences.image.url}
                  width={70}
                  height={70}
                  alt="d"
                />
              </div>
              <div data-aos="zoom-out-left" className={styles.titleCard}>
                <Heading4>{experiences.title}</Heading4>
              </div>

              {/* <Heading3>{experiences.description}</Heading3> */}
            </div>
          ))}
        </div>
      </div>
    </ParallaxLayer>
  );
}
