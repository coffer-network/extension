import { ChainId } from '@stacks/network';
import { HStack, styled } from 'coffer-styles/jsx';

import { stacksChainIdToCoreNetworkMode } from '@coffer.network/stacks';

import { capitalize } from '@app/common/utils';

interface NoFeesWarningRowProps {
  chainId: ChainId;
}
export function NoFeesWarningRow({ chainId }: NoFeesWarningRowProps) {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <styled.span textStyle="caption.01">No fees are incurred</styled.span>
      <styled.span textStyle="caption.01">
        {capitalize(stacksChainIdToCoreNetworkMode(chainId))}
      </styled.span>
    </HStack>
  );
}
