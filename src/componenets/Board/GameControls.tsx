import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import PlayersControl from './PlayersControl';
import RoundControl from './RoundControl';
import WinnerControl from './WinnerControl';

interface IGameControlsProps {
  players: number;
  round: number;
  maxPlayers: number;
  winner: number;
  winningValue: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  setPlayers: React.Dispatch<React.SetStateAction<number>>;
}

const GameControls: React.FC<IGameControlsProps & IStyledComponent> = ({
  className,
  round,
  players,
  winner,
  winningValue,
  maxPlayers,
  setRound,
  setPlayers,
}) => {
  return (
    <div className={className}>
      <RoundControl round={round} setRound={setRound} />
      <WinnerControl winner={winner} winningValue={winningValue} />
      <PlayersControl players={players} maxPlayers={maxPlayers} setPlayers={setPlayers} />
    </div>
  );
};

export const StyledGameControls = styled(GameControls)`
  height: 85px;
  margin: 10px;
  display: flex;
  align-content: baseline;
  justify-content: space-between;
`;

export default StyledGameControls;
