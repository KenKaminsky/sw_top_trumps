import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import colors from '../../styles/colors';
import { SuitDetails } from './constants';

interface SuitButtonProps {
  suit: SuitDetails;
}

const SuitButton: React.FC<SuitButtonProps & IStyledComponent> = ({ className, suit }) => {
  const history = useHistory();
  return (
    <button className={className} onClick={() => history.push(suit.path)}>
      <div>
        <img src={suit.img} alt={suit.label} />
      </div>
      <h2>{suit.label}</h2>
    </button>
  );
};

const StyledSuitButton = styled(SuitButton)`
  background: ${colors.black};
  padding: 15px;
  h2 {
    color: yellow;
  }
  img {
    width: 100%;
  }
`;

export default StyledSuitButton;
