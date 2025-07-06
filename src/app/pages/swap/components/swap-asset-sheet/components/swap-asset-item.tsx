import { SwapSelectors } from '@tests/selectors/swap.selectors';
import { sanitize } from 'dompurify';

import { isFtAsset } from '@coffer.network/query';
import { Avatar, ItemLayout, Pressable } from '@coffer.network/ui';
import { formatMoneyWithoutSymbol, isString } from '@coffer.network/utils';

import { convertSwapAssetBalanceToFiat } from '@app/pages/swap/swap.utils';
import type { SwapAsset } from '@app/query/common/alex-sdk/alex-sdk.hooks';
import { useGetFungibleTokenMetadataQuery } from '@app/query/stacks/token-metadata/fungible-tokens/fungible-token-metadata.query';

interface SwapAssetItemProps {
  asset: SwapAsset;
  onClick(): void;
}
export function SwapAssetItem({ asset, onClick }: SwapAssetItemProps) {
  const { data: ftMetadata } = useGetFungibleTokenMetadataQuery(asset.principal);

  const ftMetadataName = ftMetadata && isFtAsset(ftMetadata) ? ftMetadata.name : asset.name;
  const displayName = asset.displayName ?? ftMetadataName;
  const fallback = asset.name.slice(0, 2);
  const fiatBalance = convertSwapAssetBalanceToFiat(asset);

  return (
    <Pressable data-testid={SwapSelectors.SwapAssetListItem} onClick={onClick} my="space.02">
      <ItemLayout
        img={
          isString(asset.icon) ? (
            <Avatar image={sanitize(asset.icon)} fallback={fallback} />
          ) : (
            asset.icon
          )
        }
        titleLeft={displayName}
        captionLeft={asset.name}
        titleRight={formatMoneyWithoutSymbol(asset.balance)}
        captionRight={fiatBalance}
      />
    </Pressable>
  );
}
