import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Board from './Board';

const Boards: React.FC = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`/boards/starships`}>Starships</Link>
        </li>
        <li>
          <Link to={`/boards/people`}>People</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`/boards/:cardSuitId`}>
          <Board />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default Boards;
