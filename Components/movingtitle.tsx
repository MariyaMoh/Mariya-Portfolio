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


export default function movingtitle() {
  return (
    <div>
    
      <div className={styles.position}>
        {/* <h1>FRONT-END </h1> <br />
        <h1>DEVELOPER</h1> */}
        <div>
          <Heading1>FRONT-END</Heading1>
          <div>
            <Heading1>DEVELOPER </Heading1>
          </div>
         

          {/* <hr className={styles.line}></hr> */}
        </div>
      </div>
    </div>
  );
}
