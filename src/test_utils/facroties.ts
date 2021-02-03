import * as Factory from 'factory.ts';
import faker from 'faker';
import { Person, Starship } from './../apollo_client/types';

export const starshipFactory = Factory.Sync.makeFactory<Starship>({
  __typename: Factory.each(() => faker.random.word()),
  id: Factory.each(() => faker.random.uuid()),
  name: Factory.each(() => faker.random.word()),
  model: Factory.each(() => faker.random.word()),
  length: Factory.each(() => faker.random.float()),
  cargoCapacity: Factory.each(() => faker.random.float()),
  hyperdriveRating: Factory.each(() => faker.random.float()),
});

export const peopleFactory = Factory.Sync.makeFactory<Person>({
  __typename: Factory.each(() => faker.random.word()),
  id: Factory.each(() => faker.random.uuid()),
  name: Factory.each(() => faker.random.word()),
  birthYear: Factory.each(() => faker.random.word()),
  mass: Factory.each(() => faker.random.float()),
  height: Factory.each(() => faker.random.float()),
  // homeworld: Factory.each(() => ({
  //   name: Factory.each(() => faker.random.word()),
  // })),
});

export const entityFactories = {
  starships: starshipFactory,
  people: peopleFactory,
};
