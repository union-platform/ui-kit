// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface LoginIcon24Props {
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
const LoginIcon24 = ({ fill, purposeLabel }:LoginIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Login Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.906 5.41504L18.5847 6.09376L6.09413 18.5834L5.41541 17.9051L17.906 5.41504Z" fill={fill} />
      <path d="M6.09413 5.41504L18.5847 17.9046L17.906 18.5838L5.41541 6.09424L6.09413 5.41504Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

LoginIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Login Icon',
};

export default LoginIcon24;
