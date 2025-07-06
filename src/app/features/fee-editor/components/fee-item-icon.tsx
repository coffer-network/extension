import type { ReactNode } from 'react';

import {
  AnimalChameleonIcon,
  AnimalEagleIcon,
  AnimalRabbitIcon,
  AnimalSnailIcon,
} from '@coffer.network/ui';

import { IconWrapper } from '@app/components/icon-wrapper';

import type { FeePriority } from '../fee-editor.context';

const feeTypeToIconMap: Record<FeePriority, ReactNode> = {
  slow: <AnimalSnailIcon />,
  standard: <AnimalRabbitIcon />,
  fast: <AnimalEagleIcon />,
  custom: <AnimalChameleonIcon />,
};

export function FeeItemIcon({ priority }: { priority: FeePriority }) {
  const icon = feeTypeToIconMap[priority] || null;

  if (!icon) {
    throw new Error('Invalid fee type');
  }

  return <IconWrapper>{icon}</IconWrapper>;
}
