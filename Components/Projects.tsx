import React from 'react';
import { About } from '../types';
import styles from './Projects.module.css';
import Image from 'next/image';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Container } from '../Components/StyleGuide/Container';
import { Spacer } from '../Components/StyleGuide/Spacer';
import { motion } from 'framer-motion';
export default function Projects({ abouts }: { abouts: About[] }) {
  return (
    // <div>
    //   <div>
    //     <Heading2>Projects</Heading2>
    //     <Spacer size={32} />
    //     <div className={styles.grid}>
    //       {abouts.map((abouts) => (
    //         <div key={abouts.id} className={styles.expCards}>
    //           <div className={styles.imgs}>
    //             {/* <img src={abouts.image.url} width="125" alt="" /> */}
    //           </div>
    //           <div className={styles.container}>
    //             <div>
    //               <span className={styles.circle}></span>
    //               <img src={abouts.image.url} width="125" alt="" />
    //               {/* <img src={abouts.image.url} width='125' alt="" /> */}
    //               <p>{abouts.experienceTitle}</p>
    //             </div>
    //             <div>
    //               <p>{abouts.description}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div style={{ padding: '4rem' }} className={styles.proContainer}>
      <div className={styles.title}>
        <Heading2 id="Experience">Projects</Heading2>
        <div>
          <Spacer size={32} />
          <motion.div
            className={styles.expCards}

            //       whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
            // transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {abouts.map((about) => (
              <div key={about.id}>
                <Container className={styles.container}>
                  {/* <div className={styles.icon}>
                    <Image
                      className={styles.img1}
                      src="/m1.png"
                      width={300}
                      height={300}
                      alt="img"
                    />
                  </div> */}

                  {/* <div className={styles.desc}>
                    <Heading3>{about.experienceTitle}</Heading3>
                    <Spacer size={32} />
                    <Heading4>{about.description}</Heading4>
                    <div></div>
                  </div> */}
                </Container>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
