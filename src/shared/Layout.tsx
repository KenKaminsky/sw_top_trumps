import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import History from '../components/History';
import Play from '../components/Play';
import { Container } from '../styles/styles';
import Home from './Home';
import PageNotFound from './PageNotFound';
import { Header, LayoutGrid, RowContainer } from './styles';

interface LayoutProps {
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ toggleTheme }) => {
  return (
    <LayoutGrid>
      <Header>
        <RowContainer data-testid={'nav'} variant={'primary'}>
          <Container as={NavLink} to='/' exact>
            Home
          </Container>
          <Container as={NavLink} to='/boards'>
            Play
          </Container>
          <Container as={NavLink} to='/history'>
            History
          </Container>
          <Container as={'button'} onClick={() => toggleTheme()}>
            Toggle Theme
          </Container>
        </RowContainer>
      </Header>
      <LayoutGrid data-testid={'main'}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/boards' component={Play} />
          <Route path='/history' component={History} />
          <Route component={PageNotFound} />
        </Switch>
      </LayoutGrid>
    </LayoutGrid>
  );
};

export default Layout;
