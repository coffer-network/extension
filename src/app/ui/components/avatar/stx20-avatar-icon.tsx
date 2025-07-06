import Stx20AvatarIconSrc from '@assets/avatars/stx20-avatar-icon.png';

import { Avatar, AvatarProps } from '@coffer.network/ui';

const fallback = 'ST';

export function Stx20AvatarIcon(props: AvatarProps) {
  return <Avatar image={Stx20AvatarIconSrc} fallback={fallback} {...props} />;
}
