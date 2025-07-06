import { hexToBytes } from '@stacks/common';
import {
  type ClarityAbiFunction,
  cvToString,
  deserializeCV,
  getCVTypeString,
} from '@stacks/transactions';
import { Stack } from 'coffer-styles/jsx';

import { cleanHex } from '@coffer.network/stacks';
import { Caption } from '@coffer.network/ui';

import { FunctionArgumentItem } from './function-argument-item';

interface FunctionArgumentListProps {
  fn: ClarityAbiFunction;
  fnArgs: string[];
}
export function FunctionArgumentList({ fn, fnArgs }: FunctionArgumentListProps) {
  return fnArgs.length > 0 ? (
    <Stack gap="space.04">
      {fnArgs
        .map(arg => deserializeCV(hexToBytes(cleanHex(arg))))
        .map((arg, i) => (
          <FunctionArgumentItem
            key={i}
            name={fn.args[i].name}
            type={getCVTypeString(arg)}
            value={cvToString(arg)}
          />
        ))}
    </Stack>
  ) : (
    <Caption>There are no arguments</Caption>
  );
}
