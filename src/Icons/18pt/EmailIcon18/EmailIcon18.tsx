// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface EmailIcon18Props {
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
const EmailIcon18 = ({ fill, purposeLabel }:EmailIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Email Icon'}
  >
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9286 3.78906H3.07143C2.78727 3.78906 2.51475 3.89886 2.31381 4.09429C2.11288 4.28972 2 4.55478 2 4.83117V13.168C2 13.4444 2.11288 13.7095 2.31381 13.9049C2.51475 14.1003 2.78727 14.2101 3.07143 14.2101H15.9286C16.2127 14.2101 16.4853 14.1003 16.6862 13.9049C16.8871 13.7095 17 13.4444 17 13.168V4.83117C17 4.55478 16.8871 4.28972 16.6862 4.09429C16.4853 3.89886 16.2127 3.78906 15.9286 3.78906V3.78906ZM14.75 4.83117L9.5 8.3639L4.25 4.83117H14.75ZM3.07143 13.168V5.30533L9.19464 9.42685C9.28432 9.48736 9.39086 9.51978 9.5 9.51978C9.60914 9.51978 9.71568 9.48736 9.80536 9.42685L15.9286 5.30533V13.168H3.07143Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

EmailIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Email Icon',
};

export default EmailIcon18;
