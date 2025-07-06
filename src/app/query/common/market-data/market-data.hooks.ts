import { useCallback, useMemo } from 'react';

import {
  CryptoCurrency,
  MarketData,
  Money,
  createMarketData,
  createMarketPair,
} from '@coffer.network/models';
import {
  pullPriceDataFromAvailableResponses,
  selectBinanceUsdPrice,
  selectCoingeckoUsdPrice,
} from '@coffer.network/query';
import { baseCurrencyAmountInQuote, calculateMeanAverage, createMoney } from '@coffer.network/utils';

import { useBinanceMarketDataQuery } from './vendors/binance-market-data.query';
import { useCoinGeckoMarketDataQuery } from './vendors/coingecko-market-data.query';

export function useCryptoCurrencyMarketDataMeanAverage(currency: CryptoCurrency): MarketData {
  const { data: coingecko } = useCoinGeckoMarketDataQuery(currency);
  const { data: binance } = useBinanceMarketDataQuery(currency);

  return useMemo(() => {
    const priceData = pullPriceDataFromAvailableResponses([
      { result: coingecko, selector: selectCoingeckoUsdPrice },
      { result: binance, selector: selectBinanceUsdPrice },
    ]);
    const meanPrice = calculateMeanAverage(priceData);

    return createMarketData(createMarketPair(currency, 'USD'), createMoney(meanPrice, 'USD'));
  }, [binance, coingecko, currency]);
}

export function useCalculateBitcoinFiatValue() {
  const btcMarketData = useCryptoCurrencyMarketDataMeanAverage('BTC');

  return useCallback(
    (value: Money) => baseCurrencyAmountInQuote(value, btcMarketData),
    [btcMarketData]
  );
}
