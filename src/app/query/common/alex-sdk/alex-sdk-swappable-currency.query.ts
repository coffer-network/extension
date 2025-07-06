import { useQuery } from '@tanstack/react-query';

import { createGetAlexSwappableCurrenciesQueryOptions } from '@coffer.network/query';

export function useGetAlexSwappableCurrenciesQuery() {
  return useQuery(createGetAlexSwappableCurrenciesQueryOptions());
}
