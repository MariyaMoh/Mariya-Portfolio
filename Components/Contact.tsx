import React from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
  Heading1,
  Heading2,
  Heading3,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Container } from '../Components/StyleGuide/Container';
import { Spacer } from '../Components/StyleGuide/Spacer';

export default function Contact() {
  return (
    <div className={styles.contactinfo}>
      <Link href="mailto:alshaibi199732@gmail.com">
        <Heading2 className={styles.contacttitle}>
          <AiOutlineArrowRight />
          Get In Touch
        </Heading2>
      </Link>
      
      <div className={styles.links}>
         <Link href="https://www.linkedin.com/in/mariya-alshaaibi-b6121a1a4/">
        <Heading3>Linkdin</Heading3>
      </Link>
        <Heading3>Github</Heading3>
      </div>
      {/* <Heading3 className={styles.Copyright}>
        &copy; Copyright 2022 Mariya ALShaaibi
      </Heading3> */}
    </div>
  );
}
