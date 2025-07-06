import { css } from 'coffer-styles/css';
import { Box } from 'coffer-styles/jsx';

import { Favicon } from '@coffer.network/ui';

interface FaviconDisplayerProps {
  requester: string;
}

export function FaviconDisplayer({ requester }: FaviconDisplayerProps) {
  return (
    <Box
      bg="ink.background-primary"
      p="space.04"
      borderRadius="lg"
      display="inline-block"
      borderColor="ink.border-default"
      borderWidth="1px"
      width="72px"
      height="72px"
    >
      {/* Remove as any when setting prop as number in mono */}
      <Box className={css({ transform: 'scale(0.9)' })}>
        <Favicon origin={requester} size={64 as any} />
      </Box>
    </Box>
  );
}
