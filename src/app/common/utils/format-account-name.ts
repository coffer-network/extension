import { truncateMiddle } from '@coffer.network/utils';

export function formatAccountName(input: string | undefined, maxLength = 20, offset = 4) {
  if (!input) return '';

  if (input.length > maxLength) {
    return truncateMiddle(input, offset);
  }
  return input;
}
