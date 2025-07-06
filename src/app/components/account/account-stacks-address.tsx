import { Caption } from '@coffer.network/ui';
import { truncateMiddle } from '@coffer.network/utils';

import { CurrentStacksAccountLoader } from '../loaders/stacks-account-loader';

export function AccountStacksAddress() {
  return (
    <CurrentStacksAccountLoader>
      {account => <Caption>{truncateMiddle(account.address, 4)}</Caption>}
    </CurrentStacksAccountLoader>
  );
}
