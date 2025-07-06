import { useQueries } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';

import {
  type FtAssetResponse,
  type HiroSip10AddressBalanceResult,
  createGetFungibleTokenMetadataQueryOptions,
  createSip10CryptoAssetInfo,
  isFtAsset,
} from '@coffer.network/query';
import { getPrincipalFromAssetString, getStacksAssetStringParts } from '@coffer.network/stacks';
import { createBaseCryptoAssetBalance, createMoney } from '@coffer.network/utils';

import { getTicker } from '@app/common/utils';
import { useCurrentNetworkState } from '@app/query/leather-query-provider';

import { useStacksClient } from '../../stacks-client';

export function useStacksFungibleTokensBalance(ftBalances: HiroSip10AddressBalanceResult[]) {
  const client = useStacksClient();
  const network = useCurrentNetworkState();

  return useQueries({
    queries: ftBalances.map(ft => {
      const address = getPrincipalFromAssetString(ft.token);
      return {
        ...createGetFungibleTokenMetadataQueryOptions({
          address,
          client,
          network: network.chain.stacks.url,
        }),
        select: (resp: FtAssetResponse | null) => {
          if (!(resp && isFtAsset(resp))) return;
          const { contractAssetName } = getStacksAssetStringParts(ft.token);
          const name = resp.name || contractAssetName;
          const symbol = resp.symbol || getTicker(name);
          return {
            contractId: ft.token,
            balance: createBaseCryptoAssetBalance(
              createMoney(new BigNumber(ft.balance), symbol, resp.decimals ?? 0)
            ),
          };
        },
      };
    }),
  });
}

export function useStacksFungibleTokensMetadata(tokens: string[]) {
  const client = useStacksClient();
  const network = useCurrentNetworkState();

  return useQueries({
    queries: tokens.map(token => {
      const address = getPrincipalFromAssetString(token);
      return {
        ...createGetFungibleTokenMetadataQueryOptions({
          address,
          client,
          network: network.chain.stacks.url,
        }),
        select: (resp: FtAssetResponse | null) => {
          if (!(resp && isFtAsset(resp))) return;
          return createSip10CryptoAssetInfo(token, resp);
        },
      };
    }),
  });
}
