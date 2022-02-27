// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface OpenProfileIcon24Props {
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
const OpenProfileIcon24 = ({ fill, purposeLabel }:OpenProfileIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Profile Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4508 16.2412C18.0996 15.3992 17.5899 14.6344 16.9502 13.9893C16.3125 13.3424 15.557 12.8266 14.7255 12.4705C14.7181 12.4667 14.7106 12.4648 14.7032 12.4611C15.863 11.6131 16.617 10.2318 16.617 8.67337C16.617 6.09171 14.5505 4 12 4C9.44949 4 7.38301 6.09171 7.38301 8.67337C7.38301 10.2318 8.13699 11.6131 9.29683 12.4629C9.28938 12.4667 9.28193 12.4686 9.27449 12.4724C8.44045 12.8285 7.69205 13.3392 7.04977 13.9912C6.41067 14.6367 5.90111 15.4015 5.54925 16.2431C5.20357 17.0671 5.01714 17.9505 5.00005 18.8455C4.99955 18.8656 5.00303 18.8856 5.0103 18.9043C5.01756 18.9231 5.02845 18.9401 5.04233 18.9545C5.05621 18.9689 5.0728 18.9804 5.09111 18.9882C5.10943 18.996 5.12911 19 5.14898 19H6.266C6.34791 19 6.41307 18.934 6.41493 18.853C6.45216 17.3982 7.02929 16.0358 8.04949 15.0031C9.10507 13.9347 10.5069 13.3467 12 13.3467C13.4931 13.3467 14.8949 13.9347 15.9505 15.0031C16.9707 16.0358 17.5478 17.3982 17.5851 18.853C17.5869 18.9359 17.6521 19 17.734 19H18.851C18.8709 19 18.8906 18.996 18.9089 18.9882C18.9272 18.9804 18.9438 18.9689 18.9577 18.9545C18.9715 18.9401 18.9824 18.9231 18.9897 18.9043C18.997 18.8856 19.0005 18.8656 19 18.8455C18.9813 17.9447 18.797 17.0685 18.4508 16.2412ZM12 11.9146C11.1455 11.9146 10.3412 11.5773 9.73619 10.9648C9.13114 10.3524 8.79789 9.53832 8.79789 8.67337C8.79789 7.80842 9.13114 6.99435 9.73619 6.38191C10.3412 5.76947 11.1455 5.43216 12 5.43216C12.8545 5.43216 13.6588 5.76947 14.2638 6.38191C14.8689 6.99435 15.2021 7.80842 15.2021 8.67337C15.2021 9.53832 14.8689 10.3524 14.2638 10.9648C13.6588 11.5773 12.8545 11.9146 12 11.9146Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

OpenProfileIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Profile Icon',
};

export default OpenProfileIcon24;
