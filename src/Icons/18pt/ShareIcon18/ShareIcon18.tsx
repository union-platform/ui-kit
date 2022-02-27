// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface ShareIcon18Props {
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
const ShareIcon18 = ({ fill, purposeLabel }:ShareIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Share Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.59995 11.7C4.41895 11.7 5.15965 11.3778 5.72125 10.863L11.3553 14.0823C11.2885 14.3329 11.2532 14.5907 11.25 14.85C11.25 16.587 12.663 18 14.4 18C16.137 18 17.55 16.587 17.55 14.85C17.55 13.113 16.137 11.7 14.4 11.7C13.581 11.7 12.8403 12.0222 12.2787 12.537L6.64465 9.3177C6.70135 9.0954 6.73735 8.8659 6.74185 8.6265L12.2778 5.463C12.8403 5.9778 13.581 6.3 14.4 6.3C16.137 6.3 17.55 4.887 17.55 3.15C17.55 1.413 16.137 0 14.4 0C12.663 0 11.25 1.413 11.25 3.15C11.25 3.4164 11.2932 3.6702 11.3553 3.9177L6.23965 6.8418C5.95502 6.4002 5.56433 6.0369 5.10324 5.78505C4.64215 5.5332 4.12534 5.40083 3.59995 5.4C1.86295 5.4 0.449951 6.813 0.449951 8.55C0.449951 10.287 1.86295 11.7 3.59995 11.7ZM14.4 13.5C15.1443 13.5 15.75 14.1057 15.75 14.85C15.75 15.5943 15.1443 16.2 14.4 16.2C13.6557 16.2 13.05 15.5943 13.05 14.85C13.05 14.1057 13.6557 13.5 14.4 13.5ZM14.4 1.8C15.1443 1.8 15.75 2.4057 15.75 3.15C15.75 3.8943 15.1443 4.5 14.4 4.5C13.6557 4.5 13.05 3.8943 13.05 3.15C13.05 2.4057 13.6557 1.8 14.4 1.8ZM3.59995 7.2C4.34425 7.2 4.94995 7.8057 4.94995 8.55C4.94995 9.2943 4.34425 9.9 3.59995 9.9C2.85565 9.9 2.24995 9.2943 2.24995 8.55C2.24995 7.8057 2.85565 7.2 3.59995 7.2Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ShareIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Share Icon',
};

export default ShareIcon18;
