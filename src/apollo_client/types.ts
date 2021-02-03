interface Base {
  __typename?: string;
  id: string;
  name: string;
}

export interface Starship extends Base {
  model: string;
  length: number;
  cargoCapacity: number;
  hyperdriveRating: number;
}

export interface Person extends Base {
  birthYear: string;
  mass: number;
  height: number;
}

export type Entity = Starship | Person;
