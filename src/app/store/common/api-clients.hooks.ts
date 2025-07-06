import { useMemo } from 'react';

import { stacksClient } from '@coffer.network/query';

import { useCurrentNetworkState } from '../networks/networks.hooks';

export function useStacksClient() {
  const network = useCurrentNetworkState();

  return useMemo(() => {
    return stacksClient(network.chain.stacks.url);
  }, [network.chain.stacks.url]);
}
