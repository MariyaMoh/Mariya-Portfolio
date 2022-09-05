import React, { useState } from 'react';
import Gallery from '../Components/Gallery/Gallery';

import { gql } from '@apollo/client';
import client from '../apolloClient';

export default function gallery({ images }: any) {
    return <Gallery images={images} />
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        images {
          id
          slug
          title
          image {
            url
          }
        }
      }
    `,
  });

  const { images } = data;

  return {
    props: {
      images,
    },
  };
}
