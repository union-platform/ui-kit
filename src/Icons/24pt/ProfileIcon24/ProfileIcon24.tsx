// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ProfileIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Profile Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0006 0C8.14661 0 5.00061 3.146 5.00061 7C5.00061 9.41 6.23061 11.552 8.09461 12.813C4.52761 14.343 2.00061 17.88 2.00061 22H4.00061C4.00061 17.57 7.57061 14 12.0006 14C16.4306 14 20.0006 17.57 20.0006 22H22.0006C22.0006 17.88 19.4736 14.342 15.9066 12.812C16.8582 12.17 17.6379 11.3045 18.1773 10.2912C18.7167 9.27797 18.9994 8.14789 19.0006 7C19.0006 3.146 15.8546 0 12.0006 0ZM12.0006 2C14.7736 2 17.0006 4.227 17.0006 7C17.0006 9.773 14.7736 12 12.0006 12C9.22761 12 7.00061 9.773 7.00061 7C7.00061 4.227 9.22761 2 12.0006 2Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ProfileIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Profile Button',
};

export default ProfileIcon24;
