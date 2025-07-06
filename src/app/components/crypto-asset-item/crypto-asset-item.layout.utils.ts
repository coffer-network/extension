import type { Money } from '@coffer.network/models';
import { formatMoneyWithoutSymbol } from '@coffer.network/utils';

import { formatBalance } from '@app/common/format-balance';

export function parseCryptoAssetBalance(availableBalance: Money) {
  const availableBalanceString = formatMoneyWithoutSymbol(availableBalance);
  const formattedBalance = formatBalance(availableBalanceString);

  return {
    availableBalanceString,
    formattedBalance,
  };
}
