// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface CopyIcon24Props {
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
const CopyIcon24 = ({ fill, purposeLabel }:CopyIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Copy Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.42859 4H15V5.5H6.42859V16H5V5.5C5 4.67499 5.64282 4 6.42859 4ZM9.46667 18.5555V8.44446H17.5333V18.5555H9.46667ZM17.5333 7H9.46667C9.07764 7 8.70459 7.15216 8.42957 7.4231C8.15454 7.69397 8 8.06134 8 8.44446V18.5555C8 18.9387 8.15454 19.306 8.42957 19.5769C8.70459 19.8478 9.07764 20 9.46667 20H17.5333C17.9224 20 18.2954 19.8478 18.5704 19.5769C18.8455 19.306 19 18.9387 19 18.5555V8.44446C19 8.06134 18.8455 7.69397 18.5704 7.4231C18.2954 7.15216 17.9224 7 17.5333 7Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

CopyIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Copy Icon',
};

export default CopyIcon24;
