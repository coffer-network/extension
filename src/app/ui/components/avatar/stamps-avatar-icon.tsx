import StampsAvatarIconSrc from '@assets/avatars/stamps-avatar-icon.png';

import { Avatar, type AvatarProps } from '@coffer.network/ui';

const fallback = 'ST';

export function StampsAvatarIcon(props: AvatarProps) {
  return <Avatar fallback={fallback} image={StampsAvatarIconSrc} {...props} />;
}
