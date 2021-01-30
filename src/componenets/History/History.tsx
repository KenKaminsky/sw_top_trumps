import React, { useContext } from 'react';
import { HistoryContext } from '../../App';

const History: React.FC = () => {
  const { history } = useContext(HistoryContext);

  return (
    <div>
      {history.map((game) => (
        <div key={game.id}>
          <div>{game.date}</div>
          <div>{game.suit}</div>
          <div>{game.winner}</div>
        </div>
      ))}
    </div>
  );
};

export default History;
