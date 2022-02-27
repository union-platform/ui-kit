// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface BellIcon24Props {
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
const BellIcon24 = ({ fill, purposeLabel }:BellIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Bell Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 17H7V10.5C7 8 9 6 11.5 6C14 6 16 8 16 10.5V17ZM18 16V10.5C18 7.43 15.86 4.86 13 4.18V3.5C13 3.10218 12.842 2.72064 12.5607 2.43934C12.2794 2.15804 11.8978 2 11.5 2C11.1022 2 10.7206 2.15804 10.4393 2.43934C10.158 2.72064 10 3.10218 10 3.5V4.18C7.13 4.86 5 7.43 5 10.5V16L3 18V19H20V18L18 16ZM11.5 22C12.0304 22 12.5391 21.7893 12.9142 21.4142C13.2893 21.0391 13.5 20.5304 13.5 20H9.5C9.5 20.5304 9.71071 21.0391 10.0858 21.4142C10.4609 21.7893 10.9696 22 11.5 22Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

BellIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Bell Button',
};

export default BellIcon24;
