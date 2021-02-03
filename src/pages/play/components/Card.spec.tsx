import '@testing-library/jest-dom/extend-expect';
import { render, screen, within } from '@testing-library/react';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CARD_SUIT_META } from '../game/constants';
import { entityFactories } from '../../../test_utils/facroties';
import { camelCaseToSentenceCase } from '../game/index';
import Card, { IDENTITY_FIELDS } from './Card';

describe('<Card />', () => {
  describe.each(Object.entries(CARD_SUIT_META))(
    'shows details excluding identity fields for card of type (%s)',
    (key, val) => {
      it('should show humanly formated field name and field value correctly', () => {
        const card = entityFactories[key].build();

        render(
          <MemoryRouter initialEntries={[val.path]}>
            <Card card={card} />
          </MemoryRouter>,
        );

        const cardUi = screen.getByTestId(`card-test-id-${card.id}`);
        const cardBody = screen.getByTestId(`card-body-id-${card.id}`);

        expect(within(cardBody).queryByText(card.id)).not.toBeInTheDocument();
        expect(within(cardUi).getByText(card.name)).toBeInTheDocument();
        Object.entries(card)
          .filter(([key]) => !IDENTITY_FIELDS.includes(key))
          .map(([key, val]) => {
            expect(within(cardUi).getByText(camelCaseToSentenceCase(key))).toBeInTheDocument();
            expect(within(cardUi).getByText(val as string)).toBeInTheDocument();
          });
      });
    },
  );
});
