// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const MessageIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Message Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6 6H6.4C5.6279 6 5 6.6279 5 7.4V15.8C5 16.5721 5.6279 17.2 6.4 17.2H8.5V19.8369L12.8939 17.2H17.6C18.3721 17.2 19 16.5721 19 15.8V7.4C19 6.6279 18.3721 6 17.6 6ZM17.6 15.8H12.5061L9.9 17.3631V15.8H6.4V7.4H17.6V15.8Z" fill={fill} />
      <path d="M11.3 14.3998H12.7V12.2998H14.8V10.8998H12.7V8.7998H11.3V10.8998H9.19995V12.2998H11.3V14.3998Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

MessageIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Message Icon',
};

export default MessageIcon24;
