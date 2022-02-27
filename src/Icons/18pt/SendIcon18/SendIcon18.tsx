// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface SendIcon18Props {
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
const SendIcon18 = ({ fill, purposeLabel }:SendIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Send Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6438 8.30763L2.39039 2.16407C2.34059 2.13917 2.28346 2.13331 2.22926 2.14649C2.10475 2.17726 2.02711 2.30323 2.05787 2.42921L3.32057 7.58839C3.33961 7.66602 3.39674 7.72901 3.47291 7.75392L5.63648 8.49659L3.47437 9.23927C3.3982 9.26563 3.34107 9.32716 3.3235 9.40479L2.05787 14.5713C2.04469 14.6255 2.05055 14.6826 2.07545 14.731C2.13258 14.8467 2.2732 14.8936 2.39039 14.8364L14.6438 8.72804C14.6892 8.70606 14.7258 8.66798 14.7493 8.62403C14.8064 8.50684 14.7595 8.36622 14.6438 8.30763ZM3.50221 13.1035L4.23902 10.0918L8.56324 8.60792C8.59693 8.5962 8.62477 8.56983 8.63648 8.53468C8.65699 8.47315 8.62477 8.40724 8.56324 8.38526L4.23902 6.90284L3.50514 3.90284L12.7044 8.51563L3.50221 13.1035Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

SendIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Send Icon',
};

export default SendIcon18;
