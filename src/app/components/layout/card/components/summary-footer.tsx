import { HStack } from 'coffer-styles/jsx';

import { CopyIcon, ExternalLinkIcon } from '@coffer.network/ui';

import { InfoCardBtn } from '@app/components/info-card/info-card';

interface SummaryFooterProps {
  onClickLink(): void;
  onClickCopy(): void;
}
export function SummaryFooter({ onClickLink, onClickCopy }: SummaryFooterProps) {
  return (
    <HStack gap="space.04" width="100%">
      <InfoCardBtn
        icon={<ExternalLinkIcon color="ink.background-primary" />}
        label="View details"
        onClick={onClickLink}
      />
      <InfoCardBtn
        icon={<CopyIcon color="ink.background-primary" />}
        label="Copy ID"
        onClick={onClickCopy}
      />
    </HStack>
  );
}
