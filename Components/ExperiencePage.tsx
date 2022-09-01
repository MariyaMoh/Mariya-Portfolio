import React from 'react';
import { Experience } from '../types';
import styles from './Experience.module.css';
// import { Card, Row } from '@nextui-org/react';
import {
  Heading1,
  Heading2,
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
    <div className={styles.aboutMesSection} style={{ padding: '50px' }}>
      <div>
        <div>
          <Heading2 id="Experience" className={styles.exptitle}>
            Experience
          </Heading2>
          <Spacer size={32} />
          <div className={styles.expCards}>
            {experiences.map((experiences) => (
              <div key={experiences.id}>
                <Container className={styles.container}>
                  <SectionTitle>{experiences.title}</SectionTitle>
                  <SectionTitle>{experiences.description}</SectionTitle>
                </Container>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
