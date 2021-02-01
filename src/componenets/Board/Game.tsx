import React, { useContext, useEffect, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HistoryContext, IHistory } from '../../App';
import { ICard } from './Card';
import Cards from './Cards';
import GameControls from './GameControls';

interface IGameProps {
  allCards: ICard[];
  compField: string;
}

const deal = (cards: ICard[], players: number): ICard[] => {
  return Array(players)
    .fill(0)
    .flatMap(() => {
      const ranIndex = Math.floor(Math.random() * (cards.length - 1));
      return cards.splice(ranIndex, 1);
    });
};

const checkWinner = (hands: ICard[], compField: string): Winner => {
  const currFieldValues = hands.map((card) => parseFloat(card[compField]) || 0);
  const value = Math.max(...currFieldValues);
  const index = currFieldValues.findIndex((cval) => cval === value);
  return { index, value };
};

export interface Winner {
  index: number;
  value: number;
}

export const DEALING_MESSAGE = 'Dealing...';

export const Game: React.FC<IGameProps> = ({ allCards, compField }) => {
  console.log('render GAME');

  const { setHistory } = useContext(HistoryContext);

  const [round, setRound] = useState(0);
  const [players, setPlayers] = useState(2);
  const [winner, setWinner] = useState<Winner>();
  const [hands, setHands] = useState<ICard[]>([]);

  useEffect(() => {
    console.log('effect GAME');

    const nhands = deal(allCards.slice(), players);
    const winner = checkWinner(hands, compField);

    setHands(nhands);
    setWinner(winner);

    setHistory((history) => [...history, { id: uuidv4(), date: new Date(), winner, compField }]);
  }, [allCards, players, round]);

  return (
    <div>
      <GameControls
        winner={winner}
        round={round}
        players={players}
        maxPlayers={allCards.length}
        setRound={setRound}
        setPlayers={setPlayers}
      />
      {hands.length === 0 ? <div>Dealing...</div> : <Cards hands={hands} />}
    </div>
  );
};

export default Game;
