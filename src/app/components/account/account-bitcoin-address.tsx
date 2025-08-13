import { Caption } from '@coffer.network/ui';
import { truncateMiddle } from '@coffer.network/utils';

import { BitcoinNativeSegwitAccountLoader } from '../loaders/bitcoin-account-loader';

interface AccountBitcoinAddressProps {
  index: number;
  addressIndex: number;
}
export function AccountBitcoinAddress({ index, addressIndex }: AccountBitcoinAddressProps) {
  return (
    <BitcoinNativeSegwitAccountLoader index={index} addressIndex={addressIndex}>
      {signer => <Caption>{truncateMiddle(signer.address, 4)}</Caption>}
    </BitcoinNativeSegwitAccountLoader>
  );
}
