import React from 'react';
import { About } from '../types';
import styles from './Projects.module.css';
import Image from 'next/image';
import {
  Heading1,
  Heading2,
  Heading3,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Container } from '../Components/StyleGuide/Container';
import { Spacer } from '../Components/StyleGuide/Spacer';

export default function Projects({ abouts }: { abouts: About[] }) {
  return (
    <div>
      <div>
        <Heading2>Projects</Heading2>
        <Spacer size={32} />
        <div className={styles.grid}>
          {abouts.map((abouts) => (
            <div key={abouts.id} className={styles.expCards}>
              <div className={styles.imgs}>
                {/* <img src={abouts.image.url} width="125" alt="" /> */}
              </div>
              <div className={styles.container}>
                <div>
                  <span className={styles.circle}></span>
                  <img src={abouts.image.url} width="125" alt="" />
                  {/* <img src={abouts.image.url} width='125' alt="" /> */}
                  <p>{abouts.experienceTitle}</p>
                </div>
                <div>
                  <p>{abouts.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
