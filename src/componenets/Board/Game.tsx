import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HistoryContext } from '../../App';
import { ICard } from './Card';
import Cards from './Cards';
import GameControls from './GameControls';

interface IGameProps {
  allCards: ICard[];
  compField: string;
}

const useDealer = (allCards: ICard[]) => {
  const [maxPlayers, setMaxPlayers] = useState(allCards.length);
  const [players, setPlayers] = useState(2);
  const [round, setRound] = useState(0);
  const [dealing, setDealing] = useState(true);
  const [hands, setHands] = useState<ICard[]>([]);

  console.log('render dealer hook');
  useEffect(() => {
    console.log('effect dealer hook');
    setDealing(true);
    setMaxPlayers(allCards.length);
    const cards = allCards.slice();
    setHands(
      Array(players)
        .fill(0)
        .flatMap(() => {
          const ranIndex = Math.floor(Math.random() * (cards.length - 1));
          return cards.splice(ranIndex, 1);
        }),
    );
    setDealing(false);
  }, [allCards, players, round]);

  return [dealing, maxPlayers, players, setPlayers, hands, round, setRound] as const;
};

interface IRoundProps {
  hands: ICard[];
  compField: string;
}

const useGameLogic = ({ hands, compField }: IRoundProps) => {
  const [winningValue, setWinningValue] = useState<number>();
  const [winner, setWinner] = useState<number>();

  useEffect(() => {
    console.log('effect Round');

    const currFieldValues = hands.map((card) => parseFloat(card[compField]) || 0);

    const winningValue = Math.max(...currFieldValues);
    const WinningPlayerIndex = currFieldValues.findIndex((val) => val === winningValue);

    setWinningValue(winningValue);
    setWinner(WinningPlayerIndex);
  }, [hands]);

  return [winner, winningValue];
};

export const Game: React.FC<IGameProps> = ({ allCards, compField }) => {
  const { setHistory } = useContext(HistoryContext);

  const [dealing, maxPlayers, players, setPlayers, hands, round, setRound] = useDealer(allCards);
  const [winner, winningValue] = useGameLogic({ hands, compField });

  useEffect(() => {
    console.log('winner ', winner);
    setHistory((history) => [
      ...history,
      { id: uuidv4(), winner, winningValue, date: new Date(), compField },
    ]);
  }, [setHistory, winner, winningValue]);

  console.log('render Game');
  return (
    <div>
      <GameControls
        winner={winner}
        winningValue={winningValue}
        round={round}
        players={players}
        maxPlayers={maxPlayers}
        setRound={setRound}
        setPlayers={setPlayers}
      />
      {dealing ? <div>Dealing...</div> : <Cards hands={hands} />}
    </div>
  );
};

export default Game;
