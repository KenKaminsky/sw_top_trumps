import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Game from './Game';

const GET_STARSHIPS = gql`
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

const GET_RAND_STARSHIPS = gql`
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

const GET_PEOPLE = gql`
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

export const SUITS = {
  starships: {
    query: GET_STARSHIPS,
    selector: (data) => data.allStarships.starships,
    compField: 'hyperdriveRating',
  },
  people: {
    query: GET_PEOPLE,
    selector: (data) => data.allPeople.people,
    compField: 'height',
  },
};

export const LOADING_MESSAGE = 'Loading...';
export const ERROR_MESSAGE = 'Oooops! Something went wrong...';

const Board: React.FC = () => {
  const { cardSuitId } = useParams<{ cardSuitId: string }>();

  const { loading, data, error } = useQuery(SUITS[cardSuitId].query);

  return (
    <>
      {loading ? (
        <div>{LOADING_MESSAGE}</div>
      ) : error ? (
        <h1>{ERROR_MESSAGE}</h1>
      ) : (
        <Game allCards={SUITS[cardSuitId].selector(data)} compField={SUITS[cardSuitId].compField} />
      )}
    </>
  );
};

export default Board;
