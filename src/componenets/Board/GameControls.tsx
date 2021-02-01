import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import PlayersControl from './PlayersControl';
import RoundControl from './RoundControl';
import WinnerControl from './WinnerControl';
import { Winner } from './Game';

interface IGameControlsProps {
  players: number;
  round: number;
  maxPlayers: number;
  winner: Winner;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  setPlayers: React.Dispatch<React.SetStateAction<number>>;
}

const GameControls: React.FC<IGameControlsProps & IStyledComponent> = ({
  className,
  round,
  players,
  winner,
  maxPlayers,
  setRound,
  setPlayers,
}) => {
  return (
    <div className={className}>
      <RoundControl round={round} setRound={setRound} />
      <WinnerControl winner={winner} />
      <PlayersControl players={players} maxPlayers={maxPlayers} setPlayers={setPlayers} />
    </div>
  );
};

export const StyledGameControls = styled(GameControls)`
  height: 85px;
  padding: 15px;
  display: flex;
  align-content: baseline;
  justify-content: space-between;
`;

export default StyledGameControls;
