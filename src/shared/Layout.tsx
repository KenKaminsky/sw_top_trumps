import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Boards from '../componenets/Board/Boards';
import History from '../componenets/History/History';
import Home from './Home';
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
import { IStyledComponent } from './types';

const Layout: React.FC<IStyledComponent> = ({ className }) => {
  return (
    <div className={className}>
      <Navbar />
      <div className={'container'}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/boards' component={Boards} />
          <Route path='/history' component={History} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
};

const StyledLayout = styled(Layout)`
  height: 100%;
  display: flex;
  flex-direction: column;

  .container {
    flex-grow: 1;
    overflow: auto;
  }
`;

export default StyledLayout;
