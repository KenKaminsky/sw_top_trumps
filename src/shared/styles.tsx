import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Label = styled.label`
  font-weight: bold;
`;

export const Centered = styled.div`
  min-width: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 1.25em;
  &.active {
    border-bottom: 1px solid white;
  }
`;
