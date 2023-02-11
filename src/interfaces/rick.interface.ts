interface ROrigin {
  name: string;
  url: string;
}

interface RLocation {
  name: string;
  url: string;
}

export interface RickAndMorty {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ROrigin;
  location: RLocation;
  episode: string[];
  image: string;
  url: string;
  // "created": "2017-11-04T18:48:46.250Z",
}

export interface RickAndMortyCollection {
  _id: string;
  ref: number;
  image: string;
  name: string;
  comment: string;
  score: number;
  uid: string;
}
