import { useQuery } from '@tanstack/react-query';

import { CryptoCurrency } from '@coffer.network/models';
import { fetchCoingeckoMarketData, marketDataQueryOptions } from '@coffer.network/query';

export function useCoinGeckoMarketDataQuery(currency: CryptoCurrency) {
  return useQuery({
    queryFn: () => fetchCoingeckoMarketData(currency),
    queryKey: [`coin-gecko-market-data-${currency}`],
    ...marketDataQueryOptions,
  });
}
