import { Outlet } from 'react-router-dom';

import { Box } from 'coffer-styles/jsx';

import { type RpcMethodNames } from '@coffer.network/rpc';
import { Approver } from '@coffer.network/ui';

import type { HasChildren } from '@app/common/has-children';
import { BackgroundOverlay } from '@app/components/loading-overlay';
import { TransactionHeader } from '@app/components/rpc-transaction-request/transaction-header';
import { TransactionWrapper } from '@app/components/rpc-transaction-request/transaction-wrapper';

import { RequestingTabClosedWarningMessage } from '../errors/requesting-tab-closed-error-msg';
import { useRpcTransactionRequest } from './use-rpc-transaction-request';

interface RpcTransactionRequestLayoutProps extends HasChildren {
  actions: React.ReactNode;
  helpUrl?: string;
  method: RpcMethodNames;
  title: string;
}
export function RpcTransactionRequestLayout({
  actions,
  children,
  helpUrl = 'https://leather.io/guides',
  method,
  title,
}: RpcTransactionRequestLayoutProps) {
  const { origin, status, onClickRequestedByLink } = useRpcTransactionRequest();

  const showOverlay = status === 'broadcasting' || status === 'submitted';

  return (
    <>
      <TransactionWrapper showOverlay={showOverlay}>
        <Approver requester={origin} width="100%">
          <Box position="relative">
            <BackgroundOverlay show={showOverlay} />
            <TransactionHeader
              title={title}
              href={helpUrl}
              onPressRequestedByLink={e => {
                e.preventDefault();
                onClickRequestedByLink(method);
              }}
            />
            <RequestingTabClosedWarningMessage />
            {children}
          </Box>
          {actions}
        </Approver>
      </TransactionWrapper>
      <Outlet />
    </>
  );
}
