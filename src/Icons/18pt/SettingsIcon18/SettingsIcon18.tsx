// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const SettingsIcon18 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Settings Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8766 9.88202C15.9136 9.59402 15.9414 9.30602 15.9414 9.00002C15.9414 8.69402 15.9136 8.40602 15.8766 8.11802L17.8289 6.63303C18.0047 6.49803 18.051 6.25503 17.9399 6.05703L16.0894 2.94303C16.0349 2.85018 15.9481 2.77925 15.8447 2.74297C15.7413 2.70669 15.628 2.70742 15.525 2.74504L13.2212 3.64503C12.74 3.28503 12.2219 2.98804 11.6575 2.76304L11.3059 0.378041C11.2906 0.272149 11.2361 0.175326 11.1526 0.105734C11.0692 0.0361422 10.9625 -0.00143796 10.8525 4.21099e-05H7.15155C6.92024 4.21099e-05 6.72593 0.162042 6.69818 0.378041L6.34658 2.76304C5.78218 2.98804 5.26404 3.29403 4.78291 3.64503L2.47905 2.74504C2.4254 2.72733 2.36915 2.71821 2.3125 2.71804C2.15521 2.71804 1.99792 2.79904 1.91464 2.94303L0.0641489 6.05703C-0.0561333 6.25503 -0.000618345 6.49803 0.175179 6.63303L2.12745 8.11802C2.09044 8.40602 2.06268 8.70302 2.06268 9.00002C2.06268 9.29702 2.09044 9.59402 2.12745 9.88202L0.175179 11.367C-0.000618345 11.502 -0.0468809 11.745 0.0641489 11.943L1.91464 15.057C1.96919 15.1499 2.05595 15.2208 2.15937 15.2571C2.2628 15.2934 2.37613 15.2926 2.47905 15.255L4.78291 14.355C5.26404 14.715 5.78218 15.012 6.34658 15.237L6.69818 17.622C6.72593 17.838 6.92024 18 7.15155 18H10.8525C11.0839 18 11.2782 17.838 11.3059 17.622L11.6575 15.237C12.2219 15.012 12.74 14.706 13.2212 14.355L15.525 15.255C15.5806 15.273 15.6361 15.282 15.6916 15.282C15.8489 15.282 16.0062 15.201 16.0894 15.057L17.9399 11.943C18.051 11.745 18.0047 11.502 17.8289 11.367L15.8766 9.88202ZM14.0446 8.34302C14.0817 8.62202 14.0909 8.81102 14.0909 9.00002C14.0909 9.18902 14.0724 9.38702 14.0446 9.65702L13.9151 10.674L14.7386 11.304L15.7378 12.06L15.0902 13.149L13.9151 12.69L12.9529 12.312L12.1201 12.924C11.7223 13.212 11.3429 13.428 10.9636 13.581L9.98281 13.968L9.83477 14.985L9.64972 16.2H8.35437L8.17857 14.985L8.03053 13.968L7.04977 13.581C6.65191 13.419 6.28181 13.212 5.91172 12.942L5.06974 12.312L4.08898 12.699L2.91391 13.158L2.26624 12.069L3.26551 11.313L4.08898 10.683L3.95944 9.66602C3.93168 9.38702 3.91318 9.18002 3.91318 9.00002C3.91318 8.82002 3.93168 8.61302 3.95944 8.34302L4.08898 7.32602L3.26551 6.69603L2.26624 5.94003L2.91391 4.85103L4.08898 5.31003L5.05123 5.68803L5.88396 5.07603C6.28181 4.78803 6.66117 4.57203 7.04052 4.41903L8.02128 4.03203L8.16932 3.01503L8.35437 1.80004H9.64046L9.81626 3.01503L9.9643 4.03203L10.9451 4.41903C11.3429 4.58103 11.713 4.78803 12.0831 5.05803L12.9251 5.68803L13.9059 5.30103L15.0809 4.84203L15.7286 5.93103L14.7386 6.69603L13.9151 7.32602L14.0446 8.34302ZM9.00204 5.40003C6.95725 5.40003 5.30105 7.01103 5.30105 9.00002C5.30105 10.989 6.95725 12.6 9.00204 12.6C11.0468 12.6 12.703 10.989 12.703 9.00002C12.703 7.01103 11.0468 5.40003 9.00204 5.40003ZM9.00204 10.8C7.98427 10.8 7.15155 9.99002 7.15155 9.00002C7.15155 8.01002 7.98427 7.20002 9.00204 7.20002C10.0198 7.20002 10.8525 8.01002 10.8525 9.00002C10.8525 9.99002 10.0198 10.8 9.00204 10.8Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

SettingsIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Settings Icon',
};

export default SettingsIcon18;
