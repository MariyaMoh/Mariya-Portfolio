import React from 'react';
import { Heading3 } from './StyleGuide/Text';
import { Profile } from '../types';
export default function AboutMe({ profiles }: { profiles: Profile[] }) {
  return (
    <div>
      <div>{/* <Heading3>About Me:</Heading3> */}</div>
      <div>{/* <p>{profiles.position}</p> */}</div>
      <div></div>
    </div>
  );
}

///need to fix it
