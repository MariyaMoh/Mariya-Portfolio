import { gql } from '@apollo/client';
import client from '../apolloClient';
import ExperiencePage from '../Components/ExperiencePage';
import { Experience, Profile, About } from '../types';
import Image from 'next/image';
import Projects from '../Components/ProjectPage';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroPage from '../Components/HeroPage';
import FooterPage from '../Components/FooterPage';
import { Header } from '../Components/Header';
import ContactForm from './ContactForm';
import AboutMe from '../Components/AboutMe';

interface HomeProps {
  experiences: Experience[];
  profiles: Profile[];
  abouts: About[];
}

export default function Home({ experiences, profiles, abouts }: HomeProps) {
  return (
    <>
      <div>
        <Parallax pages={5} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            // speed={3}
            factor={1}
            style={{
              backgroundColor: `var(--lemon-yellow)`,
              backgroundSize: 'cover',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* <Header /> */}
            <HeroPage />
            <AboutMe profiles={profiles} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            // speed={2}
            // factor={1}
            style={{
              backgroundColor: '#FFDEB4',
              backgroundSize: 'cover',
            }}
          >
            <ExperiencePage experiences={experiences} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            // speed={0.5}
            factor={2}
            style={{
              backgroundColor: `var(--flavescent)`,
              backgroundSize: 'cover',
            }}
          >
            <Projects abouts={abouts} />
          </ParallaxLayer>
          <ParallaxLayer
            // sticky={{ start: 3, end: 4 }}
            offset={4}
            // offset={3}
            // speed={0.5}
            // factor={1}
            // factor={1}
            style={{
              backgroundColor: '#B2A4FF',
              backgroundSize: 'cover',
            }}
          >
            <FooterPage />
          </ParallaxLayer>

          {/* <ParallaxLayer
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
          </ParallaxLayer> */}
        </Parallax>
      </div>
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
      }
    `,
  });
  console.log(data);
  const { experiences, profiles, abouts } = data;
  return {
    props: {
      experiences,
      profiles,
      abouts,
    },
  };
}
