import React from 'react';
import Image from 'next/image';
import styles from './movingtitle.module.css';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Spacer } from '../Components/StyleGuide/Spacer';
import { Primary } from '../Components/StyleGuide/Button';
import { motion } from 'framer-motion';
export default function movingtitle() {
  return (
    <div>
      <Spacer size={200} />
      <div className={styles.position}>
        <div>
          <Heading1>Front-end Developer</Heading1>
        </div>

        <Spacer size={100} />
        {/* <hr className={styles.line}></hr> */}
      </div>
      {/* <Image
        className={styles.img1}
        src="/nob.png"
        width={100}
        height={100}
        alt="img"
      /> */}
    </div>
  );
}
