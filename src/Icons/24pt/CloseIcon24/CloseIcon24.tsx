// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const CloseIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Call Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.657 16.2427L13.4143 12.0001L17.657 7.75744L16.2428 6.34323L12.0001 10.5859L7.75748 6.34323L6.34327 7.75744L10.5859 12.0001L6.34327 16.2427L7.75748 17.6569L12.0001 13.4143L16.2428 17.6569L17.657 16.2427V16.2427Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

CloseIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Close Icon',
};

export default CloseIcon24;
