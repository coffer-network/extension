import { HStack } from 'coffer-styles/jsx';

import { BulletSeparator, Caption } from '@coffer.network/ui';
import { truncateMiddle } from '@coffer.network/utils';

import { useBitcoinNativeSegwitAccountLoader } from '../loaders/bitcoin-account-loader';

interface AccountAddressesProps {
  index: number;
  addressIndex: number;
}
export function AccountAddresses({ index, addressIndex }: AccountAddressesProps) {
  const signer = useBitcoinNativeSegwitAccountLoader({ index, addressIndex });
  return (
    <HStack alignItems="center" gap="space.02" whiteSpace="nowrap">
      <BulletSeparator>
        {/* {account ? <Caption>{truncateMiddle(account.address, 4)}</Caption> : null} */}
        {signer ? <Caption>{truncateMiddle(signer.address, 4)}</Caption> : null}
        {signer?.derivationPath ? <Caption>{signer.derivationPath}</Caption> : null}
      </BulletSeparator>
    </HStack>
  );
}
