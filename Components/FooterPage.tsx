import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import { Aboutt } from '../types';
import { Heading1, Heading2, Heading4, SectionTitle } from './StyleGuide/Text';

import styles from './FooterPage.module.css';
import Image from 'next/image';
export default function FooterPage() {
  return (
    <div className={styles.footer}>
      <div data-aos="zoom-in" className={styles.position}>
        <img className={styles.imgg} src="/arrow.gif" alt="img" />
        {/* <Link href="mailto:alshaibi199732@gmail.com">
          <Heading1 className={styles.contacttitle}>Get In Touch</Heading1>
        </Link> */}
        <Link href={'mailto:alshaibi199732@gmail.com'}>
          <span className={styles.GetHover}>
            <Heading1 className={styles.contacttitle}>Get In Touch</Heading1>
            {/* <Heading1 className={styles.contacttitle}>Get In Touch</Heading1> */}
          </span>
        </Link>
      </div>
      <div className={styles.links}>
        <div className={styles.LinkedInLink}>
          <Link href="https://www.linkedin.com/in/mariya-alshaaibi-b6121a1a4/">
            <Heading4>LinkedIn</Heading4>
          </Link>
        </div>
        <div className={styles.GitHubLink}>
          <Link href="https://github.com/MariyaMoh">
            <Heading4>GitHub</Heading4>
          </Link>
        </div>
      </div>
    </div>
  );
}
