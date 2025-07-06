import ReceiveFundsEllipses from '@assets/images/fund/receive-funds-ellipses.png';
import { Box } from 'coffer-styles/jsx';

import { BtcAvatarIcon, StxAvatarIcon } from '@coffer.network/ui';

export function StacksIconComponent() {
  return (
    <>
      <Box>
        <StxAvatarIcon size="xl" />
      </Box>
      <Box>
        <img src={ReceiveFundsEllipses} width="24px" />
      </Box>
    </>
  );
}

export function BitcoinIconComponent() {
  return (
    <>
      <BtcAvatarIcon size="xl" />
      <Box>
        <img src={ReceiveFundsEllipses} width="24px" />
      </Box>
    </>
  );
}
