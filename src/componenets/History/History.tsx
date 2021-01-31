import React, { useContext } from 'react';
import { HistoryContext } from '../../App';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import { Centered } from '../../shared/styles';

const THead = styled.thead`
  text-align: left;
`;

const History: React.FC<IStyledComponent> = ({ className }) => {
  const { history } = useContext(HistoryContext);

  return (
    <Centered className={'center'}>
      <table className={className}>
        <THead>
          <tr>
            <th>Time</th>
            <th>Winner</th>
            <th>Field Compared</th>
            <th>Winning Value</th>
          </tr>
        </THead>
        <tbody>
          {history.map((game) => (
            <tr key={game.id}>
              <td>{game.date.toLocaleTimeString()}</td>
              <td>{game.winner}</td>
              <td>{game.compField}</td>
              <td>{game.winningValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Centered>
  );
};

const StyledHistory = styled(History)``;

export default StyledHistory;
