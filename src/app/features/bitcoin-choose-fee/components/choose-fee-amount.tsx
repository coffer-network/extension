import { styled } from 'coffer-styles/jsx';

import type { Money } from '@coffer.network/models';
import { formatMoney } from '@coffer.network/utils';

interface ChooseFeeAmountProps {
  amount: Money;
  showError: boolean;
}

export function ChooseFeeAmount({ amount, showError }: ChooseFeeAmountProps) {
  return (
    <styled.h3 textStyle="heading.03" color={showError ? 'red.action-primary-default' : 'unset'}>
      {formatMoney(amount)}
    </styled.h3>
  );
}
