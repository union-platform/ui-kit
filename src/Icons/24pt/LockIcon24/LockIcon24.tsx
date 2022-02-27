// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface LockIcon24Props {
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
const LockIcon24 = ({ fill, purposeLabel }:LockIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Lock Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.25 8.33333H16.375V6.52381C16.375 4.02667 14.415 2 12 2C9.585 2 7.625 4.02667 7.625 6.52381V8.33333H6.75C5.7875 8.33333 5 9.14762 5 10.1429V19.1905C5 20.1857 5.7875 21 6.75 21H17.25C18.2125 21 19 20.1857 19 19.1905V10.1429C19 9.14762 18.2125 8.33333 17.25 8.33333ZM9.375 6.52381C9.375 5.0219 10.5475 3.80952 12 3.80952C13.4525 3.80952 14.625 5.0219 14.625 6.52381V8.33333H9.375V6.52381ZM17.25 19.1905H6.75V10.1429H17.25V19.1905ZM12 16.4762C12.9625 16.4762 13.75 15.6619 13.75 14.6667C13.75 13.6714 12.9625 12.8571 12 12.8571C11.0375 12.8571 10.25 13.6714 10.25 14.6667C10.25 15.6619 11.0375 16.4762 12 16.4762Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

LockIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Lock Icon',
};

export default LockIcon24;
