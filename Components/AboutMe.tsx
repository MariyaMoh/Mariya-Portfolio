import React from 'react';
// import bootstrap from 'bootstrap';
import styles from './AboutMe.module.css';
import { useQuery, gql } from '@apollo/client';
import { Profile } from '../types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading3, SectionTitle } from '../Components/StyleGuide/Text';
import { Primary } from '../Components/StyleGuide/Button';
import { Spacer } from '../Components/StyleGuide/Spacer';
import { Grid, Card, Text } from '@nextui-org/react';
// import {
//   Heading1,
//   Heading2,
//   Heading3,
//   SectionTitle,
// } from '../Components/StyleGuide/Text';

// import { useMediaQuery } from './useMediaQuery.js';

import editor from '/public/images/editor.png';
export default function AboutMe({ profiles }: { profiles: Profile[] }) {
  return (
    <div>
      <Spacer size={32} />
      <Spacer size={32} />
      <Spacer size={32} />
      <Spacer size={32} />
      {profiles.map((profiles) => (
        <div key={profiles.id} className={styles.AboutMe}>
          <Heading3>{profiles.position}</Heading3>
          {/* <button className={styles.btn}>Download CV</button> */}
          <div>
            <Spacer size={32} />
            <Primary>Download CV</Primary>
          </div>
          {/* <div>
            <Image
              className={styles.img1}
              src="/star.svg"
              width={125}
              height={125}
              alt="img"
            />
            <Image
              className={styles.img1}
              src="/star.svg"
              width={125}
              height={125}
              alt="img"
            />
          </div> */}
        </div>
      ))}
    </div>
  );
}
