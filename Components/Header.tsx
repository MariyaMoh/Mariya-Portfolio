import Link from 'next/link';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { Heading1, Heading4 } from '../Components/StyleGuide/Text';


export const Header = () => (
  <header className={styles.header}>
    {/* <Spacer size={32} /> */}
    {/* <motion.h1
      transition={{ type: 'spring', velocity: 10, stiffness: 30 }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      <Link href="/">
        <a className={styles.logo}>
          <span>MARIYA ALSHAAIBI</span>
        </a>
      </Link>
    </motion.h1> */}
 
    <Heading4 as="h1" data-aos="zoom-out-down">
      {' '}
      Mariya ALShaaibi
    </Heading4>

    {/* <SectionTitle>Mariya ALShaaibi</SectionTitle> */}
  </header>
);
