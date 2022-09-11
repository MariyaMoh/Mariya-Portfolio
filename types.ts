export interface Experience {
  image: {
    url: string;
  };
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface Profile {
  name: string;
  position: string;
  slug: string;
  id: string;
}

export interface About {
  image: {
    url: string;
  };
  experienceTitle: string;
  description: string;
  id: string;
  slug: string;
  // githubLink:string;
  // imgage: {
  //    url: string;
  // }
}
