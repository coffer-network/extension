import { useMemo } from 'react';

import { bitcoinNetworkModeToCoreNetworkMode } from '@coffer.network/bitcoin';
import {
  BESTINSLOT_API_BASE_URL_MAINNET,
  BESTINSLOT_API_BASE_URL_TESTNET,
} from '@coffer.network/models';
import { bitcoinClient } from '@coffer.network/query';
import { whenNetwork } from '@coffer.network/utils';

import { useLeatherNetwork } from '@app/query/leather-query-provider';

export function useBitcoinClient() {
  const network = useLeatherNetwork();
  const bestInSlotPath = whenNetwork(
    bitcoinNetworkModeToCoreNetworkMode(network.chain.bitcoin.mode)
  )({
    mainnet: BESTINSLOT_API_BASE_URL_MAINNET,
    testnet: BESTINSLOT_API_BASE_URL_TESTNET,
  });

  return useMemo(
    () =>
      bitcoinClient({
        networkName: network.chain.bitcoin.bitcoinNetwork,
        basePath: network.chain.bitcoin.bitcoinUrl,
        bestInSlotPath,
      }),
    [bestInSlotPath, network.chain.bitcoin.bitcoinNetwork, network.chain.bitcoin.bitcoinUrl]
  );
}
