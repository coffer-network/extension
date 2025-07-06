import { memo } from 'react';

import { Box, CircleProps } from 'coffer-styles/jsx';

import { DynamicColorCircle } from '@coffer.network/ui';

const getAccountNumber = (index: number) => {
  // Always return account number in the Account Circle
  return String(index + 1);
};

interface AccountAvatarProps extends CircleProps {
  name: string;
  publicKey: string;
  index: number;
}
export const AccountAvatar = memo(({ name, publicKey, index, ...props }: AccountAvatarProps) => {
  const gradient = publicKey + index.toString();
  const text = getAccountNumber(index);

  return (
    <DynamicColorCircle sizeParam="40" value={gradient} {...props}>
      <Box position="absolute">{text}</Box>
    </DynamicColorCircle>
  );
});
