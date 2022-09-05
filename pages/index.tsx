import { gql } from '@apollo/client';
import client from '../apolloClient';
import styles from './index.module.css';
import ExperiencePage from '../Components/ExperiencePage';
// import Services from '../Components/Services';
import { Experience, Profile, About /* Aboutt  */ } from '../types';
import ProfileSection from '../Components/AboutMe';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Movingtitle from '../Components/movingtitle';
import Image from 'next/image';
import Projects from '../Components/Projects';
import {
  Heading1,
  Heading2,
  Heading3,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Container } from '../Components/StyleGuide/Container';
import { Spacer } from '../Components/StyleGuide/Spacer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Page1 from '../Components/Page1';
import Page2 from '../Components/Page1';
import Page4 from '../Components/Page4';
import { Header } from '../Components/Header';
interface HomeProps {
  experiences: Experience[];
  profiles: Profile[];
  // aboutts: Aboutt[];
  abouts: About[];
}

export default function Home({
  experiences,
  profiles,
  abouts,
}: // aboutts,
HomeProps) {
  // console.log(abouts);

  return (
    <>
      <div>
        <Parallax pages={2.5}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1}
            style={{
              backgroundColor: `var(--lemon-yellow)`,
              backgroundSize: 'cover',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Header />
            <Page1 />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.999}
            speed={1}
            // factor={1}
            style={{
              backgroundColor: `var(--light-salmon)`,
              backgroundSize: 'cover',
            }}
          >
            <ExperiencePage experiences={experiences} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={1}
            // factor={1}
            style={{
              backgroundColor: `var(--flavescent)`,
              backgroundSize: 'cover',
            }}
          >
            <Projects abouts={abouts} />
          </ParallaxLayer>
          <ParallaxLayer
            // sticky={{ start: 3, end: 4 }}
            offset={1.999}
            speed={1}
            // factor={1}
            factor={1.5}
            style={{
              backgroundColor: `var(--turquoise-green)`,
              backgroundSize: 'cover',
            }}
          >
            <Page4 />
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 0.6, end: 0.6 }}
            style={{ paddingLeft: '77rem' }}
          >
            <Image
              className="imgg"
              src="/arrow.gif"
              width={80}
              height={80}
              alt="img"
            />
          </ParallaxLayer>

          {/* <ParallaxLayer
            sticky={{ start: 1.6, end: 1.8 }}
            style={{ paddingLeft: '10rem' }}
          >
            <Heading2>E</Heading2>
          </ParallaxLayer> */}

          {/* <ParallaxLayer
            sticky={{ start: 2.5, end: 2.7 }}
            style={{ paddingLeft: '10rem' }}
          >
            <Heading1>P</Heading1>
          </ParallaxLayer> */}
        </Parallax>
      </div>

      {/* <Container> */}
      {/* <Movingtitle /> */}
      {/* <Spacer size={32} /> */}
      {/* <Spacer size={32} /> */}
      {/* <Heading1>Heading 1</Heading1> */}
      {/* <ProfileSection profiles={profiles} /> */}
      {/* <Spacer size={32} /> */}
      {/* <Heading2>Heading 2</Heading2> */}
      {/* <Spacer size={32} />
        <SectionTitle>Colors</SectionTitle>
        <Spacer size={32} /> */}
      {/* <div
          style={{ padding: '50px', backgroundColor: `var(--color-purple)` }}
        ></div>
        <Spacer size={16} />
        <div
          style={{ padding: '50px', backgroundColor: `var(--color-venetian)` }}
        ></div> */}
      {/* <Spacer size={32} /> */}

      {/* <ExperiencePage experiences={experiences} /> */}
      {/* <Projects abouts={abouts} /> */}
      {/* <Contact /> */}
      {/* </Container> */}
      {/* <Movingtitle about={aboutts} /> */}

      {/* <ProfileSection profiles={profiles} /> */}
      {/* <ExperiencePage experiences={experiences} /> */}
      {/* <Projects abouts={abouts} /> */}

      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        experiences {
          image {
            url
          }
          id
          title
          slug
          description
        }

        profiles {
          profileImage {
            url
          }
          name
          position
          slug
          id
        }

        abouts {
          experienceTitle
          description
          id
          slug
          image {
            url
          }
        }

        aboutts {
          aboutt
        }
      }
    `,
  });
  console.log(data);
  const { experiences, profiles, abouts, aboutts } = data;
  return {
    props: {
      experiences,
      profiles,
      aboutts,
      abouts,
    },
  };
}
