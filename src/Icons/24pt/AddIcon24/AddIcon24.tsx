// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface AddIcon24Props {
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
const AddIcon24 = ({ fill, purposeLabel }:AddIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Add Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

AddIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Add Icon',
};

export default AddIcon24;
