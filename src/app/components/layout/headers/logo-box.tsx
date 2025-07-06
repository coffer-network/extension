import { OnboardingSelectors } from '@tests/selectors/onboarding.selectors';
import { Box, BoxProps } from 'coffer-styles/jsx';

import { Logo } from '@coffer.network/ui';

interface LogoBoxProps extends BoxProps {
  onClick?(): void;
}

export function LogoBox({ onClick, ...props }: LogoBoxProps) {
  return (
    <Box height="headerContainerHeight" margin="auto" px="space.02" hideBelow="sm" {...props}>
      <Logo data-testid={OnboardingSelectors.LogoRouteToHome} onClick={onClick} />
    </Box>
  );
}
