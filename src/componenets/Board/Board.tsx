import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Game from './Game';

const STARSHIPS = gql`
  query starships {
    allStarships(first: 36) {
      totalCount
      starships {
        id
        name
        model
        length
        cargoCapacity
        hyperdriveRating
      }
    }
  }
`;

const PEOPLE = gql`
  query people {
    allPeople(first: 10) {
      totalCount
      people {
        id
        name
        birthYear
        height
        mass
      }
    }
  }
`;

export interface IStarship {
  id: string;
  name: string;
  model: string;
  length: Float32Array;
  cargoCapacity: Float32Array;
  hyperdriveRating: Float32Array;
}

export interface IPerson {
  id: string;
  name: string;
  birthYear: 'string';
  mass: Float32Array;
  height: Float32Array;
}

const SUITS = {
  starships: {
    query: STARSHIPS,
    selector: (data) => data.allStarships.starships,
    compField: 'hyperdriveRating',
  },
  people: {
    query: PEOPLE,
    selector: (data) => data.allPeople.people,
    compField: 'height',
  },
};

const ERROR = 'Oooops! Something went wrong...';

const Board: React.FC = () => {
  const { cardSuitId } = useParams<{ cardSuitId: string }>();

  const [nPlayers] = useState(5);
  const { loading, data, error } = useQuery(SUITS[cardSuitId].query);

  if (loading) return <div>Loading...</div>;
  if (error) return <h1>{ERROR}</h1>;

  const allCards = SUITS[cardSuitId].selector(data);

  return <Game allCards={allCards} nPlayers={nPlayers} compField={SUITS[cardSuitId].compField} />;
};

export default Board;
