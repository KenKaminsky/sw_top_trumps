import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import Card, { ICard } from './Card';

interface ICardsProps {
  hands: ICard[];
}

const Cards: React.FC<ICardsProps & IStyledComponent> = ({ className, hands }) => {
  return (
    <div className={className}>
      {hands.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
};

export const StyledCards = styled(Cards)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default StyledCards;
