import { gql } from '@apollo/client';

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

const GET_PEOPLE = gql`
  query people {
    allPeople(first: 82) {
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

export const SW_QUERIES = {
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
