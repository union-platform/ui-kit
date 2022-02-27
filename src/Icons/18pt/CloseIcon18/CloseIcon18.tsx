// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface CloseIcon18Props {
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
const CloseIcon18 = ({ fill, purposeLabel }:CloseIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Close Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.2427 3.34315L9.00008 7.58579L4.75744 3.34315L3.34323 4.75736L7.58587 9L3.34323 13.2426L4.75744 14.6569L9.00008 10.4142L13.2427 14.6569L14.6569 13.2426L10.4143 9L14.6569 4.75736L13.2427 3.34315V3.34315Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

CloseIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Close Icon',
};

export default CloseIcon18;
