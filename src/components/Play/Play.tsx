import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { BASE_SUIT_PATH } from '../../shared/types';
import ChooseSuit from './components/ChooseSuit';
import Game from './components/Game';

const Play: React.FC = () => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={BASE_SUIT_PATH + '/:suit'}>
          <Game />
        </Route>
        <Route path={BASE_SUIT_PATH}>
          <ChooseSuit />
        </Route>
      </Switch>
    </>
  );
};

export default Play;
