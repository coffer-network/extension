import * as yup from 'yup';

import type { NetworkConfiguration } from '@coffer.network/models';
import { stacksChainIdToCoreNetworkMode } from '@coffer.network/stacks';

import { FormErrorMessages } from '@shared/error-messages';

import {
  notCurrentAddressValidator,
  stxAddressNetworkValidator,
  stxAddressValidator,
} from './address-validators';
import { complianceValidator } from './compliance-validators';

export function stxRecipientValidator(
  currentAddress: string,
  currentNetwork: NetworkConfiguration
) {
  return yup
    .string()
    .defined(FormErrorMessages.AddressRequired)
    .concat(stxAddressValidator(FormErrorMessages.InvalidAddress))
    .concat(stxAddressNetworkValidator(currentNetwork))
    .concat(notCurrentAddressValidator(currentAddress))
    .concat(
      complianceValidator(
        stxAddressValidator(FormErrorMessages.InvalidAddress),
        stacksChainIdToCoreNetworkMode(currentNetwork.chain.stacks.chainId)
      )
    );
}
