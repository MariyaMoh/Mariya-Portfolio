import { gql } from '@apollo/client';
import client from '../apolloClient';
import ExperiencePage from '../Components/ExperiencePage';
import { Experience, Profile, About } from '../types';
import Projects from '../Components/ProjectPage';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import HeroPage from '../Components/HeroPage';
import FooterPage from '../Components/FooterPage';
import AboutMe from '../Components/AboutMe';

interface HomeProps {
  experiences: Experience[];
  profiles: Profile[];
  abouts: About[];
}

export default function Home({ experiences, abouts }: HomeProps) {
  return (
    <>
      <div>
        <Parallax pages={6} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            style={{
              backgroundColor: `var(--lemon-yellow)`,
              backgroundSize: 'cover',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <HeroPage />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            style={{
              backgroundColor: `var(--flavescent)`,
              backgroundSize: 'cover',
            }}
          >
            <AboutMe />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            style={{
              backgroundColor: '#FFDEB4',
              backgroundSize: 'cover',
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={3}
            style={{
              backgroundColor: '#FFDEB4',
              backgroundSize: 'cover',
            }}
          >
            <ExperiencePage experiences={experiences} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            style={{
              backgroundColor: '#FFDEB4',
              backgroundSize: 'cover',
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={5}
            style={{
              backgroundColor: `var(--flavescent)`,
              backgroundSize: 'cover',
            }}
          >
            <Projects abouts={abouts} />
            <ParallaxLayer
              offset={6}
              style={{
                backgroundColor: '#FFDEB4',
                backgroundSize: 'cover',
              }}
            ></ParallaxLayer>
          </ParallaxLayer>
          <ParallaxLayer
            offset={7}
            style={{
              backgroundColor: '#B2A4FF',
              backgroundSize: 'cover',
            }}
          >
            <FooterPage />
          </ParallaxLayer>
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
