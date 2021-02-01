import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import colors from '../../styles/colors';
import { StyledLink } from './../../shared/styles';

const Sidenav: React.FC<IStyledComponent> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Boards</h2>
      <ul>
        <li>
          <StyledLink to={`/boards/starships`}>Starships</StyledLink>
        </li>
        <li>
          <StyledLink to={`/boards/people`}>People</StyledLink>
        </li>
      </ul>
    </div>
  );
};

export const StyledSidenav = styled(Sidenav)`
  color: white;
  width: 150px;
  padding: 15px;
  background: ${colors.black};

  li {
    margin: 5px;
  }
`;

export default StyledSidenav;
