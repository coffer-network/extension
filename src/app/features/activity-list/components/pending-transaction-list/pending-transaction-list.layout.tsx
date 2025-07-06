import { ReactNode } from 'react';

import { Stack, styled } from 'coffer-styles/jsx';

interface PendingTransactionListLayoutProps {
  children: ReactNode;
}
export function PendingTransactionListLayout({ children }: PendingTransactionListLayoutProps) {
  return (
    <>
      <styled.span color="ink.text-subdued" textStyle="body.02">
        Pending
      </styled.span>
      <Stack pb="space.06" mt="space.04">
        {children}
      </Stack>
    </>
  );
}
