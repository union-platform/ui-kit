// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface FilterIcon14Props {
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
const FilterIcon14 = ({ fill, purposeLabel }:FilterIcon14Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Filter Icon'}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.55556 12H8.44444V10.5714H5.55556V12ZM2.66667 7.71429H11.3333V6.28571H2.66667V7.71429ZM0.5 2V3.42857H13.5V2H0.5Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

FilterIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Filter Icon',
};

export default FilterIcon14;
