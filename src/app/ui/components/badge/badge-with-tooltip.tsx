import { Badge, type BadgeProps } from '@coffer.network/ui';

import { BasicTooltip } from '../tooltip/basic-tooltip';

type TooltipSideType = 'bottom' | 'left' | 'right' | 'top';

interface BadgeWithTooltipProps extends BadgeProps {
  hoverLabel: string;
  side?: TooltipSideType;
}
export function BadgeWithTooltip({ hoverLabel, side = 'bottom', ...props }: BadgeWithTooltipProps) {
  return (
    <BasicTooltip label={hoverLabel} side={side}>
      <Badge {...props} />
    </BasicTooltip>
  );
}
