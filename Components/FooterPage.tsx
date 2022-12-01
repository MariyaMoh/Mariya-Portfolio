import React from 'react';
import Link from 'next/link';
import { Heading1, Heading4 } from './StyleGuide/Text';
import styles from './FooterPage.module.css';

export default function FooterPage() {
  return (
    <div className={styles.footerContainer} id="Contact">
      <div data-aos="zoom-in" className={styles.position}>
        <img className={styles.star} src="/Star_red.svg" alt="" />

        <Link href={'mailto:alshaibi199732@gmail.com'}>
          <span className={styles.GetHover}>
            <Heading1 className={styles.contacttitle}>Get In Touch</Heading1>
          </span>
        </Link>
      </div>

      <footer className={styles.links}>
        <div className={styles.LinkedInLink}>
          <Link href="https://www.linkedin.com/in/mariya-alshaaibi-b6121a1a4/">
            <p>LinkedIn</p>
          </Link>
        </div>

        <div className={styles.GitHubLink}>
          <Link href="https://github.com/MariyaMoh">
            <p>GitHub</p>
          </Link>
        </div>
        <div className={styles.GitHubLink}>
          <Link href={'mailto:alshaibi199732@gmail.com'}>
            <p>E-mail</p>
          </Link>
        </div>
      </footer>
    </div>
    // </ParallaxLayer>
  );
}
