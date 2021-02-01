import React, { useContext } from 'react';
import { HistoryContext } from '../../App';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import { Centered } from '../../shared/styles';
import colors from '../../styles/colors';

const THead = styled.thead``;

export const NO_HISTORY_MESSAGE = 'No History Yet...';

const History: React.FC<IStyledComponent> = ({ className }) => {
  const { history } = useContext(HistoryContext);

  return (
    <div className={className}>
      <div className={'container'}>
        <table>
          <THead>
            <tr>
              <th>Time</th>
              <th>Winner</th>
              <th>Winning Value</th>
              <th>Field Compared</th>
            </tr>
          </THead>
          <tbody>
            {history.length > 0 ? (
              history.map((game) => (
                <tr key={game.id}>
                  <td>{game.date.toLocaleTimeString()}</td>
                  <td>{game.winner.index}</td>
                  <td>{game.winner.value}</td>
                  <td>{game.compField}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>{NO_HISTORY_MESSAGE}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StyledHistory = styled(History)`
  height: 100%;
  padding: 15px 150px;
  background: ${colors.white};

  .container {
    text-align: center;
    height: 95%;
    overflow-y: auto;
    border-radius: 10px;
    background: ${colors.black};
    color: white;
    padding: 15px;

    table {
      width: 100%;

      tr {
        line-height: 2.5em;
      }
    }
  }
`;

export default StyledHistory;
