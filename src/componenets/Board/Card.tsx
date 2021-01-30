import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { camelCaseToSentenceCase } from '../../shared/helpers';
import { IPerson, IStarship } from './Board';
import { STARSHIPS_SUIT } from './cardSuits';

interface CardFieldProps {
  fieldValue: number | string;
  fieldName: string;
}

const CardField: React.FC<CardFieldProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  fieldValue,
  fieldName,
}) => {
  return (
    <div className={className}>
      <label>{fieldName}</label>
      <span>{fieldValue}</span>
    </div>
  );
};

export const StyledCardField = styled(CardField)`
  display: flex;
  justify-content: space-between;

  label {
    font-weight: bold;
  }

  span {
    text-align: end;
  }
`;

export type ICard = IStarship | IPerson;

interface CardProps {
  data: ICard;
}

const Card: React.FC<CardProps & React.HTMLAttributes<HTMLDivElement>> = ({ className, data }) => {
  return (
    <div className={className}>
      <div>
        <img src={STARSHIPS_SUIT['c3RhcnNoaXBzOjI=']} alt='img' />
      </div>
      <h2>{data.name}</h2>
      <div>
        {Object.keys(data)
          .filter((key) => !['__typename', 'id', 'name'].includes(key))
          .map((key) => (
            <StyledCardField
              key={key}
              fieldName={camelCaseToSentenceCase(key)}
              fieldValue={data[key]}
            />
          ))}
      </div>
    </div>
  );
};

export const StyledCard = styled(Card)`
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  background: ${colors.white};
  img {
    width: 100%;
  }
`;

export default StyledCard;
