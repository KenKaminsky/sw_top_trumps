import React, { useEffect, useState } from 'react';
import Card, { ICard } from './Card';

interface IRoundProps {
  round: number;
  hands: ICard[][];
  compField: string;
}

const Round: React.FC<IRoundProps> = ({ round, hands, compField }) => {
  const [playerTopCard, setPlayerTopCard] = useState<ICard>();

  useEffect(() => {
    console.log('effect Round', round);

    const currRoundCards = hands.map((hand) => hand.shift());

    setPlayerTopCard(currRoundCards[0]);

    const currFieldValues = currRoundCards.map((card) => card[compField]);

    if (currFieldValues.some((val) => !val)) {
      // keep for next round winner
      // start next round
    }

    const winningValue = Math.max(...currFieldValues);
    const WinningPlayerIndex = currFieldValues.findIndex((val) => val === winningValue);

    console.log(winningValue, WinningPlayerIndex);
  }, [round, hands]);

  if (!playerTopCard) return <div>Loading...</div>;
  return <Card key={playerTopCard.id} data={playerTopCard} />;
};

export default Round;
