import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GraphQLError } from 'graphql';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ERROR_MESSAGE, LOADING_MESSAGE, SUITS } from './Board';
import Boards from './Boards';
import { SUITS_META } from './constants';
import { DEALING_MESSAGE } from './Game';

it.only.each([Object.keys(SUITS_META).map((key) => SUITS_META[key].label)])(
  'renders loading state for (%s)',
  async (label) => {
    const mocks = [
      {
        request: {
          query: SUITS.starships.query,
        },
        result: {
          data: {
            allStarships: {
              totalCount: 10,
              starships: [
                // {
                //   __typename: 'startship',
                //   id: '1',
                //   name: 'Star',
                //   model: 'ship',
                //   length: 77.77,
                //   cargoCapacity: 88.88,
                //   hyperdriveRating: 99.99,
                // },
              ],
            },
          },
        },
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Boards />
      </MockedProvider>,
      { wrapper: MemoryRouter },
    );
    userEvent.click(screen.getByText(label), { button: 0 });
    expect(screen.getByText(LOADING_MESSAGE)).toBeInTheDocument();
    await waitFor(() => new Promise((resolve) => setTimeout(resolve, 0)));
    expect(screen.getByText(DEALING_MESSAGE)).toBeInTheDocument();
  },
);

it.each([Object.keys(SUITS_META).map((key) => SUITS_META[key].label)])(
  'renders success state for (%s)',
  async (label) => {
    const mocks = [
      {
        request: {
          query: SUITS.starships.query,
        },
        result: {
          data: {
            allStarships: {
              totalCount: 10,
              starships: [
                {
                  __typename: 'startship',
                  id: '1',
                  name: 'Star',
                  model: 'ship',
                  length: 77.77,
                  cargoCapacity: 88.88,
                  hyperdriveRating: 99.99,
                },
              ],
            },
          },
        },
      },
    ];
    render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Boards />
      </MockedProvider>,
      { wrapper: MemoryRouter },
    );

    userEvent.click(screen.getByText(label), { button: 0 });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(screen.getByText(DEALING_MESSAGE)).toBeInTheDocument();
  },
);
it.each([Object.keys(SUITS_META).map((key) => SUITS_META[key].label)])(
  'renders network error state for (%s)',
  async (label) => {
    const mocks = [
      {
        request: {
          query: SUITS.starships.query,
        },
        error: new Error('An error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Boards />
      </MockedProvider>,
      { wrapper: MemoryRouter },
    );

    userEvent.click(screen.getByText(label), { button: 0 });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  },
);

it.each([Object.keys(SUITS_META).map((key) => SUITS_META[key].label)])(
  'renders graphql error state (%s)',
  async (label) => {
    const mocks = [
      {
        request: {
          query: SUITS.starships.query,
        },
        errors: [new GraphQLError('Error!')],
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Boards />
      </MockedProvider>,
      { wrapper: MemoryRouter },
    );

    userEvent.click(screen.getByText(label), { button: 0 });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  },
);
