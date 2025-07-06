import { HStack } from 'coffer-styles/jsx';

import { BulletSeparator, Caption } from '@coffer.network/ui';
import { truncateMiddle } from '@coffer.network/utils';

import { useBitcoinNativeSegwitAccountLoader } from '../loaders/bitcoin-account-loader';
import { useStacksAccountLoader } from '../loaders/stacks-account-loader';

interface AccountAddressesProps {
  index: number;
}
export function AccountAddresses({ index }: AccountAddressesProps) {
  const account = useStacksAccountLoader({ index });
  const signer = useBitcoinNativeSegwitAccountLoader({ index });
  return (
    <HStack alignItems="center" gap="space.02" whiteSpace="nowrap">
      <BulletSeparator>
        {account ? <Caption>{truncateMiddle(account.address, 4)}</Caption> : null}
        {signer ? <Caption>{truncateMiddle(signer.address, 4)}</Caption> : null}
      </BulletSeparator>
    </HStack>
  );
}
