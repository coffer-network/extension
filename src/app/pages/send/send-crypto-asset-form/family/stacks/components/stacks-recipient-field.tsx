import { fetchStacksNameOwner } from '@coffer.network/query';

import { RecipientField } from '../../../components/recipient-fields/recipient-field';

export function StacksRecipientField() {
  return <RecipientField bnsLookupFn={fetchStacksNameOwner} />;
}
