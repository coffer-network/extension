import type { CryptoCurrency, MarketData } from '@coffer.network/models';
import { ItemLayout } from '@coffer.network/ui';
import {
  baseCurrencyAmountInQuote,
  capitalize,
  createMoney,
  formatMoneyPadded,
  i18nFormatCurrency,
} from '@coffer.network/utils';

import type { Fee } from '../fee-editor.context';
import { FeeItemIcon } from './fee-item-icon';

const feeSymbolToFractionalUnitMap: Record<CryptoCurrency, string> = {
  BTC: 'sats',
  STX: 'uSTX',
};

interface FeeRateItemLayoutProps {
  fee: Fee;
  marketData: MarketData;
  showChevron?: boolean;
}
export function FeeRateItemLayout({ fee, marketData, showChevron }: FeeRateItemLayoutProps) {
  const { priority, feeRate, txFee, time } = fee;

  return (
    <ItemLayout
      img={<FeeItemIcon priority={fee.priority} />}
      showChevron={showChevron}
      titleLeft={capitalize(priority)}
      captionLeft={time}
      titleRight={txFee ? formatMoneyPadded(txFee) : 'N/A'}
      captionRight={
        txFee
          ? `${feeRate} ${feeSymbolToFractionalUnitMap[txFee.symbol]}/vB · ${i18nFormatCurrency(
              baseCurrencyAmountInQuote(
                createMoney(Math.ceil(txFee.amount.toNumber()), txFee.symbol),
                marketData
              )
            )}`
          : null
      }
    />
  );
}
