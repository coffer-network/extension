import { Caption } from '@coffer.network/ui';
import { truncateMiddle } from '@coffer.network/utils';

import { BitcoinNativeSegwitAccountLoader } from '../loaders/bitcoin-account-loader';

interface AccountBitcoinAddressProps {
  index: number;
}
export function AccountBitcoinAddress({ index }: AccountBitcoinAddressProps) {
  return (
    <BitcoinNativeSegwitAccountLoader index={index}>
      {signer => <Caption>{truncateMiddle(signer.address, 4)}</Caption>}
    </BitcoinNativeSegwitAccountLoader>
  );
}
