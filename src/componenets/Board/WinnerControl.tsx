import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import { Centered, Label } from './../../shared/styles';
import { Winner } from './Game';

interface IWinnerControlProps {
  winner: Winner;
}

const WinnerControl: React.FC<IWinnerControlProps & IStyledComponent> = ({ className, winner }) => {
  return (
    <Centered className={className}>
      <div>
        <h2>Winner</h2>
        <div>
          <Label>Player number: </Label>
          <span>{winner?.index}</span>
        </div>
        <div>
          <Label>Winning Value: </Label>
          <span>{winner?.value}</span>
        </div>
      </div>
    </Centered>
  );
};

export const StyledWinnerControl = styled(WinnerControl)`
  input {
    text-align: end;
  }
`;

export default StyledWinnerControl;
