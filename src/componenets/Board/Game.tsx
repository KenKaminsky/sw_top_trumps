import React, { useEffect, useState } from 'react';
import { ICard } from './Card';
import { shuffleArray, splitEqually } from './Logic';
import Round from './Round';

interface IGameProps {
  allCards: ICard[];
  nPlayers: number;
  compField: string;
}

export const Game: React.FC<IGameProps> = ({ allCards, nPlayers, compField }) => {
  const [round, setRound] = useState(-1);
  const [hands, setHands] = useState<ICard[][]>([]);

  useEffect(() => {
    const shuffeledCards = shuffleArray<ICard>(allCards);

    setHands(splitEqually<ICard>(shuffeledCards, nPlayers));

    setRound(-1);
  }, [allCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      hands.length > 0 && round < hands[0].length
        ? setRound((round) => round + 1)
        : clearInterval(interval);
    }, 5000);
    return () => clearInterval(interval);
  }, [round, hands]);

  return <Round round={round} hands={hands} compField={compField} />;
};

export default Game;
