import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import styles from '../styles/Home.module.css';
import { Header } from '../Components/Header';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.PageContainer}>
        <Header />
        <Component key={router.asPath} {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
