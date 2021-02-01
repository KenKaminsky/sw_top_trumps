import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import Board from './Board';
import ChooseSuit from './ChooseSuit';
import Sidenav from './Sidenav';

const Boards: React.FC<IStyledComponent> = ({ className }) => {
  const match = useRouteMatch();

  return (
    <div className={className}>
      <Sidenav />

      <div className={'container'}>
        <Switch>
          <Route path={`/boards/:cardSuitId`}>
            <Board />
          </Route>
          <Route path={match.path}>
            <ChooseSuit />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const StyledBpards = styled(Boards)`
  height: 100%;
  display: flex;

  .container {
    flex-grow: 1;
    width: 80%;
    overflow: auto;
  }
`;

export default StyledBpards;
