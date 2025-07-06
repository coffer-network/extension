import type React from 'react';

import { SwapSelectors } from '@tests/selectors/swap.selectors';
import { sanitize } from 'dompurify';
import { HStack, styled } from 'coffer-styles/jsx';

import type { Money } from '@coffer.network/models';
import { Flag } from '@coffer.network/ui';
import { formatMoneyWithoutSymbol, isString } from '@coffer.network/utils';

interface SwapAssetItemLayoutProps {
  caption: string;
  icon: React.ReactNode;
  symbol: string;
  value: Money;
}
export function SwapAssetItemLayout({ caption, icon, symbol, value }: SwapAssetItemLayoutProps) {
  return (
    <Flag
      img={
        isString(icon) ? (
          <styled.img
            src={sanitize(icon)}
            borderRadius="50%"
            width="48px"
            height="48px"
            alt="Swap asset"
          />
        ) : (
          icon
        )
      }
      spacing="space.03"
      width="100%"
    >
      <styled.span color="ink.text-subdued" textStyle="caption.01">
        {caption}
      </styled.span>
      <HStack alignItems="center" justifyContent="space-between">
        <styled.span data-testid={SwapSelectors.SwapDetailsSymbol} textStyle="heading.05">
          {symbol}
        </styled.span>
        <styled.span data-testid={SwapSelectors.SwapDetailsAmount} textStyle="heading.05">
          {formatMoneyWithoutSymbol(value)}
        </styled.span>
      </HStack>
    </Flag>
  );
}
