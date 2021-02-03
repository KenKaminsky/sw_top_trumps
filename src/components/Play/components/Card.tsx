import React from 'react';
import { useParams } from 'react-router-dom';
import { Entity } from '../../../apollo_client/types';
import { RouterParams } from '../../../shared/types';
import { camelCaseToSentenceCase } from '../../helpers/index';
import { CardBody, CardBodyRow, CardContainer, CardHeader, Label, Span } from '../styles';

export const IDENTITY_FIELDS = ['__typename', 'id', 'name'];

interface CardProps {
  card: Entity;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { suit } = useParams<RouterParams>();

  return (
    <CardContainer data-testid={`card-test-id-${card.id}`} variant={'secondary'}>
      <CardHeader suit={suit}>{card.name}</CardHeader>
      <CardBody data-testid={`card-body-id-${card.id}`}>
        {Object.entries(card)
          .filter(([key]) => !IDENTITY_FIELDS.includes(key))
          .map(([key, val]) => (
            <CardBodyRow key={key}>
              <Label>{camelCaseToSentenceCase(key)}</Label>
              <Span>{val}</Span>
            </CardBodyRow>
          ))}
      </CardBody>
    </CardContainer>
  );
};

export default Card;
