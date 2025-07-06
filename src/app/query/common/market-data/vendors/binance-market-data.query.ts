import { useQuery } from '@tanstack/react-query';

import { CryptoCurrency } from '@coffer.network/models';
import { fetchBinanceMarketData, marketDataQueryOptions } from '@coffer.network/query';

export function useBinanceMarketDataQuery(currency: CryptoCurrency) {
  return useQuery({
    queryFn: () => fetchBinanceMarketData(currency),
    queryKey: [`binance-market-data-${currency}`],
    ...marketDataQueryOptions,
  });
}
