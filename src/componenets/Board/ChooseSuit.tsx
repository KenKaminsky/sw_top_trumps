import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import colors from '../../styles/colors';
import { SUITS_META } from './constants';
import SuitButton from './SuitButton';

export const PLEASE_SELECT_MESSAGE = 'Please select a Card Suit.';

const ChooseSuit: React.FC<IStyledComponent> = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <h3>{PLEASE_SELECT_MESSAGE}</h3>
      </div>
      <div className={'options'}>
        {/* {Object.keys(SUITS).map((key) => (
          <SuitButton key={key} suit={SUITS[key]} />
        ))} */}
      </div>
    </div>
  );
};

const StyledChooseSuit = styled(ChooseSuit)`
backgroundL ${colors.lighterGrey};
  .options {
    display: flex;
    // justify-content: stretch;
    // flex-flow: wrap;
  }
  h3 {
    margin: 15px;
    color: white;
  }
`;

export default StyledChooseSuit;
