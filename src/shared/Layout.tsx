import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Boards from '../componenets/Board/Boards';
import History from '../componenets/History/History';
import Navbar from './Navbar';
import { IStyledComponent } from './types';

const Layout: React.FC<IStyledComponent> = ({ className }) => {
  return (
    <div className={className}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Boards} />
        <Route exact path='/boards' component={Boards} />
        <Route path='/history' component={History} />
        <Route component={Boards} />
      </Switch>
    </div>
  );
};

const StyledLayout = styled(Layout)``;

export default StyledLayout;
