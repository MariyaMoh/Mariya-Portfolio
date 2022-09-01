import React from 'react';
import styles from './AboutMe.module.css';
import { useQuery, gql } from '@apollo/client';
import { Profile } from '../types';
import Image from 'next/image';
import { Card, Row, Text, Col, styled } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { Heading3 } from '../Components/StyleGuide/Text';
import { primary } from '../Components/StyleGuide/Button';

import editor from '/public/images/editor.png';
export default function AboutMe({ profiles }: { profiles: Profile[] }) {
  return (
    <div>
      {profiles.map((profiles) => (
        <div key={profiles.id} className={styles.AboutMe}>
          <Heading3>{profiles.position}</Heading3>

          {/* <primary>Download CV</primary> */}

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
