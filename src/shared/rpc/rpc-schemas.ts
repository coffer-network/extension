import { z } from 'zod';

import {
  type DefaultNetworkConfigurations,
  WalletDefaultNetworkConfigurationIds,
} from '@coffer.network/models';

type NonEmptyDefaultNetworkIdList = [
  DefaultNetworkConfigurations,
  ...DefaultNetworkConfigurations[],
];

export const defaultNetworkIdSchema = z.enum(
  Object.values(WalletDefaultNetworkConfigurationIds) as NonEmptyDefaultNetworkIdList
);
