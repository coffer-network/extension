import { styled } from 'coffer-styles/jsx';

import { Eye1ClosedIcon } from '@coffer.network/ui';

import { CollectiblePlaceholderLayout } from './collectible-placeholder.layout';

export function ImageUnavailable() {
  return (
    <CollectiblePlaceholderLayout>
      <Eye1ClosedIcon />
      <styled.span pt="space.02" px="space.04" textStyle="label.03">
        Image currently unavailable
      </styled.span>
    </CollectiblePlaceholderLayout>
  );
}
