import React from 'react';
import styles from './movingtitle.module.css';
import { motion } from 'framer-motion';
import img1 from './images/img1.jpg';
// import { Aboutt } from '../types';
import {
  Heading1,
  Heading2,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Spacer } from '../Components/StyleGuide/Spacer';

export default function movingtitle() {
  return (
    <div>
      <Spacer size={32} />
      <Spacer size={32} />
      <div className={styles.position}>
        {/* <h1>FRONT-END </h1> <br />
        <h1>DEVELOPER</h1> */}
        <div>
          <Heading1>FRONT-END</Heading1>
          <div>
            <Heading1>DEVELOPER </Heading1>
          </div>
          <Spacer size={100} />

          {/* <hr className={styles.line}></hr> */}
        </div>
      </div>
    </div>
  );
}
