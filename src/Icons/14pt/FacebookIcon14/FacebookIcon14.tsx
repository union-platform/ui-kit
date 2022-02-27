// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface FacebookIcon14Props {
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
const FacebookIcon14 = ({ fill, purposeLabel }:FacebookIcon14Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Facebook Icon'}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.59259 1.03704H11.4074C12.2665 1.03704 12.963 1.73348 12.963 2.59259V11.4074C12.963 12.2665 12.2665 12.963 11.4074 12.963H8.95722V7.99281H10.8513L10.9375 6.14497H8.95722V4.79571C8.95722 4.28623 9.06262 3.97927 9.72044 3.97927C10.3282 3.97927 10.8852 3.98476 10.8852 3.98476L10.9282 2.2592C10.9282 2.2592 10.3821 2.1875 9.64353 2.1875C7.81937 2.1875 7.0277 3.32644 7.0277 4.56668V6.14497H5.6875V7.99281H7.0277V12.963H2.59259C1.73348 12.963 1.03704 12.2665 1.03704 11.4074V2.59259C1.03704 1.73348 1.73348 1.03704 2.59259 1.03704ZM0 2.59259C0 1.16074 1.16074 0 2.59259 0H11.4074C12.8393 0 14 1.16074 14 2.59259V11.4074C14 12.8393 12.8393 14 11.4074 14H2.59259C1.16074 14 0 12.8393 0 11.4074V2.59259Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

FacebookIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Facebook Icon',
};

export default FacebookIcon14;
