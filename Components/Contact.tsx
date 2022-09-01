import React from 'react';
import styles from './Contact.module.css';
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
    <div className={styles.contactinfo} >
      <Heading2 className={styles.contacttitle}>
        <AiOutlineArrowRight />
        Get In Touch
      </Heading2>

      <div className={styles.links}>
        <SectionTitle>Linkdin</SectionTitle>
        <SectionTitle>Github</SectionTitle>
      </div>
      <SectionTitle className={styles.Copyright}>
        &copy; Copyright 2022 Mariya ALShaaibi
      </SectionTitle>
    </div>
  );
}
