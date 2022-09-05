import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import { Aboutt } from '../types';
import {
  Heading1,
  Heading2,
  Heading4,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Spacer } from '../Components/StyleGuide/Spacer';
import styles from './Page4.module.css';
import Image from 'next/image';
export default function movingtitle() {
  return (
    <div>
      <Spacer size={290} />
      {/* <div className={styles.main}> */}
      {/* <h1>FRONT-END </h1> <br />
        <h1>DEVELOPER</h1> */}
      <div className={styles.position}>
        <Link href="mailto:alshaibi199732@gmail.com">
          <Heading2 className={styles.contacttitle}>
            {/* <AiOutlineArrowRight /> */}
            <Image
              className={styles.imgg}
              src="/arrow.gif"
              width={80}
              height={80}
              alt="img"
            />
            Get In Touch
          </Heading2>
        </Link>
        {/* 
        <div className={styles.links}>
          <Link href="https://www.linkedin.com/in/mariya-alshaaibi-b6121a1a4/">
            <Heading4>Linkdin</Heading4>
          </Link>
          <Heading4>Github</Heading4>
        </div>
      </div> */}
      </div>

      {/* <hr className={styles.line}></hr> */}
    </div>
    // </div>
  );
}
