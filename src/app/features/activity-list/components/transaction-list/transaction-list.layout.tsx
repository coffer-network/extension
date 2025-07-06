import { ReactNode } from 'react';

import { Stack } from 'coffer-styles/jsx';

interface TransactionListLayoutProps {
  children: ReactNode;
}
export function TransactionListLayout({ children }: TransactionListLayoutProps) {
  return <Stack pb="space.06">{children}</Stack>;
}
