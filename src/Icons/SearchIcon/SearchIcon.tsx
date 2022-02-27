// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface SearchIconProps {
  /**
   *  Variant of button
   */
  fill?: string;
  /**
   *  Variant of button
   */
  purposeLabel?: string;
}

/**
 * Primary UI component for user interaction
 */
const SearchIcon = ({ fill, purposeLabel }: SearchIconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Search Icon'}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5604 13.4394L11.8895 9.76855C11.3426 10.6191 10.6187 11.3426 9.76807 11.8895L13.4392 15.5604C14.0253 16.1463 14.9756 16.1463 15.5604 15.5604C16.1465 14.9755 16.1465 14.0253 15.5604 13.4394Z" fill={fill} />
      <path d="M12.0007 5.99991C12.0007 2.68655 9.3141 0 6.0004 0C2.68677 0 0 2.68655 0 5.99991C0 9.31327 2.68677 11.9997 6.0004 11.9997C9.3141 11.9997 12.0007 9.31327 12.0007 5.99991ZM6.0004 10.4997C3.51879 10.4997 1.50014 8.48135 1.50014 5.99994C1.50014 3.51853 3.51879 1.50005 6.0004 1.50005C8.48195 1.50005 10.5008 3.51853 10.5008 5.99994C10.5008 8.48135 8.48195 10.4997 6.0004 10.4997Z" fill={fill} />
      <path d="M2.49927 5.99991H3.49921C3.49921 4.62147 4.6209 3.49996 5.99942 3.49996V2.5C4.06969 2.5 2.49927 4.07029 2.49927 5.99991Z" fill={fill} />
    </svg>

  </AccessibleIcon.Root>
);

SearchIcon.defaultProps = {
  fill: GrayShades.navigationGray,
  purposeLabel: 'Search Button',
};

export default SearchIcon;
