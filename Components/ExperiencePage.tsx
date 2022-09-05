import React from 'react';
import { Experience } from '../types';
import styles from './Experience.module.css';
// import { Card, Row } from '@nextui-org/react';
import Image from 'next/image';
import {
  Heading1,
  Heading2,
  Heading4,
  Heading3,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Container } from '../Components/StyleGuide/Container';
import { Spacer } from '../Components/StyleGuide/Spacer';
export default function ExperiencePage({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <div style={{ padding: '4rem' }}>
      <div>
        <Heading2 id="Experience" className={styles.exptitle}>
          Experience
        </Heading2>
        <div className={styles.expCards}>
          {experiences.map((experiences) => (
            <div key={experiences.id} className={styles.box}>
              <Container className={styles.container}>
                <div className={styles.icon}>
                  <img
                    src={experiences.image.url}
                    width={70}
                    height={70}
                    alt="d"
                  />
                </div>
                <Heading4>{experiences.title}</Heading4>

                {/* <Heading3>{experiences.description}</Heading3> */}
              </Container>
              {/* <Spacer size={32} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
