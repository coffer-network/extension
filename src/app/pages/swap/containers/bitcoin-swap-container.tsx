import { BitcoinNativeSegwitAccountLoader } from '@app/components/loaders/bitcoin-account-loader';
import { BitcoinUtxosLoader } from '@app/components/loaders/bitcoin-utxos-loader';

import { BitcoinSwapProvider } from '../providers/bitcoin-swap-provider';
import { useCurrentAddressIndex } from '@app/store/accounts/account';

export function BitcoinSwapContainer() {
  const addressIndex = useCurrentAddressIndex();
  return (
    <BitcoinNativeSegwitAccountLoader current addressIndex={addressIndex}>
      {signer => (
        <BitcoinUtxosLoader>
          {utxos => {
            return <BitcoinSwapProvider signer={signer} utxos={utxos} />;
          }}
        </BitcoinUtxosLoader>
      )}
    </BitcoinNativeSegwitAccountLoader>
  );
}
