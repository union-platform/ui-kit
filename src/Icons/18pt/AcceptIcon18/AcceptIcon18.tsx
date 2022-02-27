// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface AcceptIcon18Props {
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
const AcceptIcon18 = ({ fill, purposeLabel }:AcceptIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Accept Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.4343 14.6971L1.2343 9.49705C0.921898 9.18465 0.921898 8.67812 1.2343 8.36568L2.36565 7.2343C2.67805 6.92187 3.18462 6.92187 3.49702 7.2343L6.99999 10.7372L14.503 3.2343C14.8154 2.9219 15.3219 2.9219 15.6343 3.2343L16.7657 4.36568C17.0781 4.67809 17.0781 5.18462 16.7657 5.49705L7.56568 14.6971C7.25324 15.0095 6.74671 15.0095 6.4343 14.6971Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

AcceptIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Accept Icon',
};

export default AcceptIcon18;
