import { gql } from '@apollo/client';
import client from '../apolloClient';
import ExperiencePage from '../Components/ExperiencePage';
// import Services from '../Components/Services';
import { Experience, Profile, About /* Aboutt  */ } from '../types';
import ProfileSection from '../Components/AboutMe';
import Footer from '../Components/Footer';
import Contact from '../Components/Contact';
import Movingtitle from '../Components/movingtitle';
import Projects from '../Components/Projects';
import {
  Heading1,
  Heading2,
  Heading3,
  SectionTitle,
} from '../Components/StyleGuide/Text';
import { Container } from '../Components/StyleGuide/Container';
import { Spacer } from '../Components/StyleGuide/Spacer';

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
  console.log(abouts);

  return (
    <>
      <Movingtitle />
      <Container>
        <Spacer size={32} />
        {/* <Spacer size={32} /> */}
        {/* <Heading1>Heading 1</Heading1> */}
        <ProfileSection profiles={profiles} />
        <Spacer size={32} />
        <Heading2>Heading 2</Heading2>
        <Spacer size={32} />
        <SectionTitle>Colors</SectionTitle>
        <Spacer size={32} />
        <div
          style={{ padding: '50px', backgroundColor: `var(--color-purple)` }}
        ></div>
        <Spacer size={16} />
        <div
          style={{ padding: '50px', backgroundColor: `var(--color-venetian)` }}
        ></div>
        <Spacer size={32} />
        <ExperiencePage experiences={experiences} />
        <Projects abouts={abouts} />
        <Contact />
      </Container>
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
