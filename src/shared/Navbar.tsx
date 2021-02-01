import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { StyledLink } from './styles';
import { IStyledComponent } from './types';

const Nav = styled.nav`
  display: flex;
  // margin-left: 150px;
  margin-right: 150px;
  width: 100%;
`;

const Ul = styled.ul`
  width: 100%;
  min-width: 696px;
  list-style-type: none;
  list-style: none;
`;

const Li = styled.ul`
  display: inline;
  margin-left: 15px;
`;

const Logo = styled.div`
  display: inline;
  width: 150px;
  img {
    width: 90%;
  }
`;

const Links = styled.div`
  display: inline;
  align-self: center;
`;

const Navbar: React.FC<IStyledComponent> = ({ className }) => {
  return (
    <div className={className}>
      <Nav>
        <Logo>
          <img
            src='https://www.5minutesformom.com/wp-content/uploads/2015/08/Star-Wars-Logo.png'
            alt='logo'
          />
        </Logo>
        <Links>
          <Ul>
            <Li>
              <StyledLink to='/boards' activeClassName='active'>
                Loby
              </StyledLink>
            </Li>
            <Li>
              <StyledLink to='/history' activeClassName='active'>
                History
              </StyledLink>
            </Li>
          </Ul>
        </Links>
      </Nav>
    </div>
  );
};

const StayledNavbar = styled(Navbar)`
  display: flex;
  align-items: center;
  background: ${colors.black};
  height: 75px;
`;

export default StayledNavbar;
