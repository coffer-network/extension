import { useSelector } from 'react-redux';

import { createSelector } from '@reduxjs/toolkit';

import { initBigNumber } from '@coffer.network/utils';

import { defaultWalletKeyId } from '@shared/utils';

import { initialSearchParams } from '@app/common/initial-search-params';
import { RootState } from '@app/store';

import { selectStacksChain } from '../chains/stx-chain.selectors';

const selectKeysSlice = (state: RootState) => state['softwareKeys'];

export const selectDefaultSoftwareKey = createSelector(
  selectKeysSlice,
  state => state.entities[defaultWalletKeyId]
);

export const selectHasSecretKey = createSelector(
  selectDefaultSoftwareKey,
  softwareKey => !!softwareKey?.encryptedSecretKey
);

export function useCurrentKeyDetails() {
  return useSelector(selectDefaultSoftwareKey);
}

export const selectCurrentAccountIndex = createSelector(selectStacksChain, stxChain => {
  const customAccountIndex = initialSearchParams.get('accountIndex');
  if (customAccountIndex && initBigNumber(customAccountIndex).isInteger()) {
    return initBigNumber(customAccountIndex).toNumber();
  }
  return stxChain[defaultWalletKeyId].currentAccountIndex;
});


export const selectCurrentAddressIndex = createSelector(selectStacksChain, stxChain => {
  const currentAddressIndex = initialSearchParams.get('addressIndex');
  if (currentAddressIndex && initBigNumber(currentAddressIndex).isInteger()) {
    return initBigNumber(currentAddressIndex).toNumber();
  }
  return stxChain[defaultWalletKeyId].currentAddressIndex;
});
