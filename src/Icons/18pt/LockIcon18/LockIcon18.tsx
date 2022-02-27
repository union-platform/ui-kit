// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface LockIcon18Props {
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
const LockIcon18 = ({ fill, purposeLabel }:LockIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Lock Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 6H12.75V4.5C12.75 2.43 11.07 0.75 9 0.75C6.93 0.75 5.25 2.43 5.25 4.5V6H4.5C3.675 6 3 6.675 3 7.5V15C3 15.825 3.675 16.5 4.5 16.5H13.5C14.325 16.5 15 15.825 15 15V7.5C15 6.675 14.325 6 13.5 6ZM6.75 4.5C6.75 3.255 7.755 2.25 9 2.25C10.245 2.25 11.25 3.255 11.25 4.5V6H6.75V4.5ZM13.5 15H4.5V7.5H13.5V15ZM9 12.75C9.825 12.75 10.5 12.075 10.5 11.25C10.5 10.425 9.825 9.75 9 9.75C8.175 9.75 7.5 10.425 7.5 11.25C7.5 12.075 8.175 12.75 9 12.75Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

LockIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Lock Icon',
};

export default LockIcon18;
