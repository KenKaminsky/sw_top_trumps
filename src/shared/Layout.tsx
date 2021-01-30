import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Boards from '../componenets/Board/Boards';
import Navbar from './Navbar';
import History from '../componenets/History/History';

const Layout: React.FC = () => {
  return (
    <div>
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

export default Layout;
