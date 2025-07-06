import { fetchBtcNameOwner } from '@coffer.network/query';

import { RecipientField } from '../../../components/recipient-fields/recipient-field';

export function TransferRecipientField() {
  return <RecipientField bnsLookupFn={fetchBtcNameOwner} />;
}
