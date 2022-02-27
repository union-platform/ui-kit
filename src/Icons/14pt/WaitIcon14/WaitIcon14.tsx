// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface WaitIcon14Props {
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
const WaitIcon14 = ({ fill, purposeLabel }:WaitIcon14Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Wait Icon'}
  >
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.66663 2C4.90547 2 2.66663 4.23884 2.66663 7C2.66663 9.76116 4.90547 12 7.66663 12C10.4278 12 12.6666 9.76116 12.6666 7C12.6666 4.23884 10.4278 2 7.66663 2ZM7.66663 11.1518C5.37422 11.1518 3.51484 9.29241 3.51484 7C3.51484 4.70759 5.37422 2.84821 7.66663 2.84821C9.95904 2.84821 11.8184 4.70759 11.8184 7C11.8184 9.29241 9.95904 11.1518 7.66663 11.1518Z" fill={fill} />
      <path d="M9.61661 8.41239L8.02509 7.26172V4.49944C8.02509 4.45033 7.98492 4.41016 7.93581 4.41016H7.39898C7.34987 4.41016 7.30969 4.45033 7.30969 4.49944V7.5731C7.30969 7.60212 7.32309 7.62891 7.34652 7.64565L9.1925 8.99163C9.23268 9.02065 9.28849 9.01172 9.3175 8.97265L9.6367 8.53739C9.66572 8.49609 9.65679 8.44029 9.61661 8.41239Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

WaitIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Wait Icon',
};

export default WaitIcon14;
