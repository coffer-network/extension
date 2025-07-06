import PQueue from 'p-queue';

import { bestInSlotMainnetApiLimiter, bestInSlotTestnetApiLimiter } from '@coffer.network/query';
import { assertUnreachable } from '@coffer.network/utils';

import { useCurrentNetworkState } from '../leather-query-provider';

export function useBestInSlotApiRateLimiter(): PQueue {
  const currentNetwork = useCurrentNetworkState();

  switch (currentNetwork.mode) {
    case 'mainnet':
      return bestInSlotMainnetApiLimiter;
    case 'testnet':
      return bestInSlotTestnetApiLimiter;
    default:
      assertUnreachable(currentNetwork.mode);
  }
}
