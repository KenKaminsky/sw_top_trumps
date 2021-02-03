import { ApolloError, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { SW_QUERIES } from '../../../apollo_client/queries';
import { Entity } from '../../../apollo_client/types';

type UseDeck = (
  suite: string,
) => {
  loading: boolean;
  deck: Entity[];
  errors: { apollo: ApolloError; game: Error };
  compField: string;
};

const useDeck: UseDeck = (suit: string) => {
  const [deck, setDeck] = useState<Entity[]>(null);
  const [compField, setCompField] = useState<string>();
  const [errors, setErrors] = useState({ apollo: null, game: null });
  const { loading, data, error: apolloError } = useQuery(SW_QUERIES[suit].query);

  useEffect(() => {
    setErrors((errors) => ({ ...errors, apollo: apolloError }));
  }, [apolloError]);

  useEffect(() => {
    if (loading || apolloError) return;
    setCompField(SW_QUERIES[suit].compField);
    const records = SW_QUERIES[suit].selector(data);

    !data || !records || records.length < 2
      ? setErrors((errors) => ({
          ...errors,
          game: new RangeError('Could not find enogh records for a game.'),
        }))
      : setDeck(records);
  }, [suit, loading, apolloError, data]);

  return { loading, errors, deck, compField };
};

export default useDeck;
