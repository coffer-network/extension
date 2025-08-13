import { Caption } from '@coffer.network/ui';
import { formatMoney } from '@coffer.network/utils';

import { BitcoinNativeSegwitAccountLoader } from '@app/components/loaders/bitcoin-account-loader';
import { BtcBalanceLoader } from '@app/components/loaders/btc-balance-loader';
import { PrivateText } from '@app/components/privacy/private-text';
import { useCurrentAddressIndex } from '@app/store/accounts/account';

export function BtcBalance() {
  const addressIndex = useCurrentAddressIndex();
  return (
    <BitcoinNativeSegwitAccountLoader current addressIndex={addressIndex}>
      {signer => (
        <BtcBalanceLoader address={signer.address}>
          {balance => (
            <Caption>
              <PrivateText canClickToShow>{formatMoney(balance.availableBalance)}</PrivateText>
            </Caption>
          )}
        </BtcBalanceLoader>
      )}
    </BitcoinNativeSegwitAccountLoader>
  );
}
