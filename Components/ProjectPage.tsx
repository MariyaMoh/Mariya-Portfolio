import React from 'react';
import { About } from '../types';
import styles from './ProjectPage.module.css';
import Link from 'next/link';
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
      <div>
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

          <div className={styles.Container}>
            {abouts.map((about) => (
              <div key={about.id} className={styles.ProjectsCards}>
                <div className={styles.card}>
                  <img
                    className={styles.imggg}
                    src={about.image.url}
                    alt="projects images"
                  />

                  <div className={styles.ProjectInfo}>
                    <Heading3>{about.experienceTitle}</Heading3>

                    <p className={styles.description}>{about.description}</p>
                  </div>
                  <PrimaryButton>
                    <Link
                      href="https://github.com/MariyaMoh?tab=repositories"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </ParallaxLayer>
      </div>
    </>
  );
}
