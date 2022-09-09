import Link from 'next/link';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import {
  Heading1,
  Heading4,
  Heading3,
  SectionTitle,
} from '../Components/StyleGuide/Text';

export const Header = () => (
  <header className={styles.header}>
    <Heading4 as="h1" data-aos="zoom-out-down">
      {' '}
      Mariya ALShaaibi
    </Heading4>
  </header>
);
