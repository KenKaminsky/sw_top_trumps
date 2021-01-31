import React from 'react';
import styled from 'styled-components';
import { Centered, Label } from '../../shared/styles';
import { IStyledComponent } from '../../shared/types';

interface IRoundControlProps {
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
}

const RoundControl: React.FC<IRoundControlProps & IStyledComponent> = ({
  className,
  round,
  setRound,
}) => {
  return (
    <>
      <Button onClick={() => setRound((round) => round + 1)}>Start Again</Button>
      <Centered className={className}>
        <div>
          <h2>Round</h2>
          <div>
            <Label>Round: </Label>
            <span>{round}</span>
          </div>
        </div>
      </Centered>
    </>
  );
};

export const Button = styled.button`
  margin: 10px;
  padding: 10px 15px;
`;

export const StyledRoundControl = styled(RoundControl)``;

export default StyledRoundControl;
