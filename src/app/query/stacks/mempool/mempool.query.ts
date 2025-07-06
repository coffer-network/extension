import { useQuery } from '@tanstack/react-query';

import { createGetAddressMempoolTransactionsQueryOptions } from '@coffer.network/query';

import { useStacksClient } from '../stacks-client';

export function useGetAddressMempoolTransactionsQuery(address: string) {
  const client = useStacksClient();
  return useQuery(createGetAddressMempoolTransactionsQueryOptions({ address, client }));
}
