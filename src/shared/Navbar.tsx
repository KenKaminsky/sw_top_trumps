import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';
import { IStyledComponent } from './types';

const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
`;

const Ul = styled.ul`
  display: flex;
  min-width: 696px;
  list-style-type: none;
  list-style: none;
`;

const Li = styled.ul`
  display: inline;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Navbar: React.FC<IStyledComponent> = ({ className }) => {
  return (
    <div className={className}>
      <Nav>
        <Ul>
          <Li>
            <StyledLink to='/'>Loby</StyledLink>
          </Li>
          <Li>
            <StyledLink to='/history'>History</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </div>
  );
};

const StayledNavbar = styled(Navbar)`
  background: ${colors.lighterGrey};
  height: 50px;
`;

export default StayledNavbar;
