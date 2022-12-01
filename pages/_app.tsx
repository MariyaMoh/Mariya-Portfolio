import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';
import Script from 'next/script';
function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-240627554-1"
      ></Script>
      <Script id="my-script">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-240627554-1');
  `}
      </Script>

      <AnimatePresence exitBeforeEnter>
        <div className={styles.PageContainer}>
          <Component key={router.asPath} {...pageProps} />
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
