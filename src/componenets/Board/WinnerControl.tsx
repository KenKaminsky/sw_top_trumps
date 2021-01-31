import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import { Centered, Label } from './../../shared/styles';

interface IWinnerControlProps {
  winner: number;
  winningValue: number;
}

const WinnerControl: React.FC<IWinnerControlProps & IStyledComponent> = ({
  className,
  winner,
  winningValue,
}) => {
  return (
    <Centered className={className}>
      <div>
        <h2>Winner</h2>
        <div>
          <Label>Player number: </Label>
          <span>{winner}</span>
        </div>
        <div>
          <Label>Winning Value: </Label>
          <span>{winningValue}</span>
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
