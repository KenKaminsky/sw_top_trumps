import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import colors from '../../styles/colors';
import { IPerson, IStarship } from './Board';
import StyledCardDetails from './CardDetails';
import CardHeader from './CardHeader';
import { STARSHIPS_SUIT } from './cardSuits';

export type ICard = IStarship | IPerson;
interface CardProps {
  data: ICard;
}

const Card: React.FC<CardProps & IStyledComponent> = ({ className, data }) => {
  return (
    <div className={className}>
      <CardHeader title={data.name} imgUrl={STARSHIPS_SUIT['c3RhcnNoaXBzOjI=']} />
      <StyledCardDetails data={data} />
    </div>
  );
};

export const StyledCard = styled(Card)`
  width: 225px;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  background: ${colors.white};
`;

export default StyledCard;
