import { StacksTx } from '@coffer.network/models';
import { ArrowDownIcon, ArrowUpIcon } from '@coffer.network/ui';

import { useCurrentStacksAccountAddress } from '@app/store/accounts/blockchain/stacks/stacks-account.hooks';

export function TokenTransferIcon(props: { tx: StacksTx }) {
  const { tx } = props;
  const currentAccountStxAddress = useCurrentStacksAccountAddress();
  const isSent = tx.sender_address === currentAccountStxAddress;

  if (isSent) return <ArrowUpIcon color="ink.background-primary" variant="small" />;

  return <ArrowDownIcon color="ink.background-primary" variant="small" />;
}
