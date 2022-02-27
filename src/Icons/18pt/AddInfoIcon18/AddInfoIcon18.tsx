// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface AddInfoIcon18Props {
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
const AddInfoIcon18 = ({ fill, purposeLabel }:AddInfoIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Add Info Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 2C5.35826 2 2 5.35826 2 9.5C2 13.6417 5.35826 17 9.5 17C13.6417 17 17 13.6417 17 9.5C17 5.35826 13.6417 2 9.5 2ZM9.5 15.7277C6.06138 15.7277 3.27232 12.9386 3.27232 9.5C3.27232 6.06138 6.06138 3.27232 9.5 3.27232C12.9386 3.27232 15.7277 6.06138 15.7277 9.5C15.7277 12.9386 12.9386 15.7277 9.5 15.7277ZM13 9.02016H9.99896V6H8.98647V9.02016H6V9.99395H8.98647V13H9.99896V9.99395H13V9.02016Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

AddInfoIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Add Info Icon',
};

export default AddInfoIcon18;
