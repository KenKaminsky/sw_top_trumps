import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Board from './Board';

const Boards: React.FC = () => {
  const match = useRouteMatch();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexBasis: '150px' }}>
        <h2>Boards</h2>
        <ul>
          <li>
            <Link to={`/boards/starships`}>Starships</Link>
          </li>
          <li>
            <Link to={`/boards/people`}>People</Link>
          </li>
        </ul>
      </div>

      <div style={{ flexGrow: 1 }}>
        <Switch>
          <Route path={`/boards/:cardSuitId`}>
            <Board />
          </Route>
          <Route path={match.path}>
            <h3>Please select a Card Suit.</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Boards;
