import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import colors from '../../styles/colors';
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
    <div className={className}>
      <div className={''}>
        <Label>Playing: </Label>
        <input
          type={'number'}
          value={players}
          max={maxPlayers}
          min={2}
          onChange={(e) => setPlayers(Math.max(2, Math.min(parseInt(e.target.value), maxPlayers)))}
        />
        <span> / {maxPlayers}</span>
      </div>
    </div>
  );
};

export const StyledPlayersControl = styled(PlayersControl)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.blue};
  font-size: 1.15em;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;

  input {
    text-decoration: underline;
    text-align: end;
    background: ${colors.blue};
    font-size: 1.15em;
    line-height: 1.25em;
    font-wight: bold;
    color: white;
    padding: ;
  }
`;

export default StyledPlayersControl;
