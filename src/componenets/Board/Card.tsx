import React from 'react';
import styled from 'styled-components';
import { IStyledComponent } from '../../shared/types';
import colors from '../../styles/colors';
import { IPerson, IStarship } from './Board';
import StyledCardDetails from './CardDetails';
import CardHeader from './CardHeader';
import { STARSHIPS_CARD_IMGS } from './constants';

export type ICard = IStarship | IPerson;
interface CardProps {
  data: ICard;
}

const Card: React.FC<CardProps & IStyledComponent> = ({ className, data }) => {
  return (
    <div className={className}>
      <CardHeader title={data.name} imgUrl={STARSHIPS_CARD_IMGS['c3RhcnNoaXBzOjI=']} />
      <StyledCardDetails data={data} />
    </div>
  );
};

export const StyledCard = styled(Card)`
  width: 225px;
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
  color: white;
  background: ${colors.black};
`;

export default StyledCard;
