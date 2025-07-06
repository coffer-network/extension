import type { MarketData } from '@coffer.network/models';
import { ItemLayout } from '@coffer.network/ui';
import {
  baseCurrencyAmountInQuote,
  capitalize,
  createMoney,
  formatMoney,
  i18nFormatCurrency,
} from '@coffer.network/utils';

import type { Fee } from '../fee-editor.context';
import { FeeItemIcon } from './fee-item-icon';

interface FeeValueItemLayoutProps {
  fee: Fee;
  marketData: MarketData;
  showChevron?: boolean;
}
export function FeeValueItemLayout({ fee, marketData, showChevron }: FeeValueItemLayoutProps) {
  const { priority, txFee, time } = fee;

  return (
    <ItemLayout
      img={<FeeItemIcon priority={fee.priority} />}
      showChevron={showChevron}
      titleLeft={capitalize(priority)}
      captionLeft={time}
      titleRight={txFee ? formatMoney(txFee) : 'N/A'}
      captionRight={
        txFee
          ? `${i18nFormatCurrency(
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
