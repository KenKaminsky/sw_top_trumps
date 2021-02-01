import React from 'react';
import styled from 'styled-components';
import { camelCaseToSentenceCase } from '../../shared/helpers';
import { IStyledComponent } from '../../shared/types';
import { ICard } from './Card';
import DetailsRow from './DetailsRow';

interface ICardDetailsProps {
  data: ICard;
}

export const IDENTITY_FIELDS = ['__typename', 'id', 'name'];

const CardDetails: React.FC<ICardDetailsProps & IStyledComponent> = ({ className, data }) => {
  return (
    <div className={className}>
      {Object.keys(data)
        .filter((key) => !IDENTITY_FIELDS.includes(key))
        .map((key) => (
          <DetailsRow key={key} label={camelCaseToSentenceCase(key)} value={data[key]} />
        ))}
    </div>
  );
};

export const StyledCardDetails = styled(CardDetails)``;

export default StyledCardDetails;
