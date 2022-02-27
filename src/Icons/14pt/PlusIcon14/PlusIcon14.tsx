// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface PlusIcon14Props {
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
const PlusIcon14 = ({ fill, purposeLabel }:PlusIcon14Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Plus Icon'}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5582 7.70755H7.66018V12H6.33989V7.70755H2.44189V6.31604H6.33989V2H7.66018V6.31604H11.5582V7.70755Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

PlusIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Plus Icon',
};

export default PlusIcon14;
