import { gql } from '@apollo/client';
import client from '../apolloClient';
import { Experience, Profile, About } from '../types';
import HeroPage from '../Components/HeroPage';
import FooterPage from '../Components/FooterPage';
import AboutMe from '../Components/AboutMe';
import ProjectsSection from '../Components/ProjecsSection';
import Head from 'next/head';

interface HomeProps {
  experiences: Experience[];
  profiles: Profile[];
  abouts: About[];
}

export default function Home({ experiences, abouts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Mariya ALShaaibi</title>
        <link rel="icon" href="/faviconM.png" />
      </Head>
      <div>
        <HeroPage />
        <AboutMe />
        <ProjectsSection />
        <FooterPage />
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
