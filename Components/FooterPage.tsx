import React from 'react';
import Link from 'next/link';
import { Heading1, Heading4 } from './StyleGuide/Text';
import { ParallaxLayer } from '@react-spring/parallax';
import styles from './FooterPage.module.css';

export default function FooterPage() {
  return (
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
      <div className={styles.footerContainer}>
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
    </ParallaxLayer>
  );
}
