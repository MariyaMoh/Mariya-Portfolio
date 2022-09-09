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
  profileImage: {
    url: string;
  };
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
  // imgage: {
  //    url: string;
  // }
}
