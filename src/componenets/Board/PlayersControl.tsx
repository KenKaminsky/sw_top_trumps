import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import { Centered, Label } from './../../shared/styles';

interface IPlayersControlProps {
  players: number;
  maxPlayers: number;
  setPlayers: React.Dispatch<React.SetStateAction<number>>;
}

const PlayersControl: React.FC<IPlayersControlProps & IStyledComponent> = ({
  className,
  players,
  maxPlayers,
  setPlayers,
}) => {
  return (
    <Centered className={className}>
      <div>
        <h2>Players</h2>
        <div>
          <Label>Playing: </Label>
          <input
            type={'number'}
            value={players}
            max={maxPlayers}
            min={2}
            onChange={(e) => setPlayers(Math.min(parseInt(e.target.value), maxPlayers))}
          />
        </div>
        <div>
          <Label>Max Players: </Label>
          <span>{maxPlayers}</span>
        </div>
      </div>
    </Centered>
  );
};

export const StyledPlayersControl = styled(PlayersControl)`
  input {
    text-align: end;
  }
`;

export default StyledPlayersControl;
