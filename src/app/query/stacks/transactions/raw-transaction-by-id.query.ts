import { useQuery } from '@tanstack/react-query';

import { createGetRawTransactionByIdQueryOptions } from '@coffer.network/query';

import { useStacksClient } from '../stacks-client';

export function useGetRawTransactionByIdQuery(txid: string) {
  const client = useStacksClient();
  return useQuery(createGetRawTransactionByIdQueryOptions({ client, txid }));
}
