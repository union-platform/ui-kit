// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const OpenSearchIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Search Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6429 15.9201L14.6603 12.9375C14.2159 13.6286 13.6278 14.2164 12.9366 14.6608L15.9195 17.6434C16.3957 18.1195 17.1677 18.1195 17.6429 17.6434C18.1191 17.1682 18.1191 16.3962 17.6429 15.9201Z" fill={fill} />
      <path d="M14.7506 9.87498C14.7506 7.18284 12.5677 5 9.87533 5C7.183 5 5 7.18284 5 9.87498C5 12.5671 7.183 14.7499 9.87533 14.7499C12.5677 14.7499 14.7506 12.5671 14.7506 9.87498ZM9.87533 13.5311C7.85902 13.5311 6.21887 11.8912 6.21887 9.87501C6.21887 7.85884 7.85902 6.21881 9.87533 6.21881C11.8916 6.21881 13.5319 7.85884 13.5319 9.87501C13.5319 11.8912 11.8916 13.5311 9.87533 13.5311Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

OpenSearchIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Search Icon',
};

export default OpenSearchIcon24;
