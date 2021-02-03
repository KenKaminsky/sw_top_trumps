import { Entity } from '../../apollo_client/types';

export const deal = (cards: Entity[], players: number): Entity[] => {
  return Array(players)
    .fill(0)
    .flatMap(() => {
      const ranIndex = Math.floor(Math.random() * (cards.length - 1));
      return cards.splice(ranIndex, 1);
    });
};

export const checkWinner = (
  hands: Entity[],
  compField: string,
): { index: number; value: number } => {
  if (hands.length < 2) throw RangeError('hands argument is not valid. Must be > 2');
  const values = hands.map((card) => parseFloat(card[compField]) || 0);
  const value = Math.max(...values);
  const index = values.findIndex((cval) => cval === value);
  return { index, value };
};

export const camelCaseToSentenceCase = (camelCaseString: string): string => {
  if (camelCaseString === '' || camelCaseString == null) return '';
  const result = camelCaseString.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};
