import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import App from './App';
import { SUITS } from './componenets/Board/Board';
import { PLEASE_SELECT_MESSAGE } from './componenets/Board/ChooseSuit';
import { NO_HISTORY_MESSAGE } from './componenets/History/History';
import { HOME_MESSAGE } from './shared/Home';
import { PAGE_NOT_FOUND_MESSAGE } from './shared/PageNotFound';

it('render app level routs as expected', () => {
  const history = createMemoryHistory();
  const mocks = [
    {
      request: {
        query: SUITS.starships.query,
      },
      result: {
        data: {},
      },
    },
  ];
  render(
    <Router history={history}>
      <MockedProvider mocks={mocks} addTypename={true}>
        <App />
      </MockedProvider>
    </Router>,
  );

  expect(screen.getByText(HOME_MESSAGE)).toBeInTheDocument();

  const leftClick = { button: 0 };

  userEvent.click(screen.getByText(/Loby/i), leftClick);
  expect(screen.getByText(PLEASE_SELECT_MESSAGE)).toBeInTheDocument();

  userEvent.click(screen.getByText(/History/i), leftClick);
  expect(screen.getByText(NO_HISTORY_MESSAGE)).toBeInTheDocument();
});

it('loads 404 page on a bad route', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const mocks = [
    {
      request: {
        query: SUITS.starships.query,
      },
      result: {
        data: {},
      },
    },
  ];
  render(
    <Router history={history}>
      <MockedProvider mocks={mocks} addTypename={true}>
        <App />
      </MockedProvider>
    </Router>,
  );

  expect(screen.getByText(PAGE_NOT_FOUND_MESSAGE)).toBeInTheDocument();
});
