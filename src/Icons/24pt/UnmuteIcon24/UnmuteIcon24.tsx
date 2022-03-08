// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const UnmuteIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Unmute Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4005 12.0534V3.944C13.4004 3.77316 13.3537 3.60554 13.2654 3.45899C13.1771 3.31245 13.0504 3.19247 12.8989 3.11183C12.7474 3.03119 12.5767 2.99292 12.4051 3.00108C12.2334 3.00924 12.0672 3.06354 11.9242 3.15819L7.4409 6.12861L6.07142 6.91584L3.04695 6.9881C2.73333 7.14416 2.46942 7.38368 2.28458 7.67999C2.09974 7.9763 2.00123 8.31779 2 8.66646V14.3334C2 15.3752 2.85219 16.2224 3.90009 16.2224H6.46236L11.9232 19.8417C12.0665 19.9362 12.2328 19.9906 12.4045 19.9989C12.5763 20.0072 12.7471 19.9692 12.8989 19.8889C13.0505 19.8082 13.1773 19.6881 13.2656 19.5414C13.354 19.3946 13.4006 19.2268 13.4005 19.0559V17.2812V12.0534ZM11.5004 5.70831L8.78571 7.46555L6.76256 8.51128C6.56548 8.61315 6.34537 8.66646 6.1218 8.66646H4.73518H3.90009V14.3334H6.75022C6.76685 14.3334 6.78205 14.3379 6.79739 14.3425C6.8101 14.3463 6.8229 14.3501 6.83667 14.3513C6.96389 14.3629 7.0874 14.4002 7.19959 14.4609C7.21 14.4661 7.22125 14.4696 7.23257 14.4731L7.23258 14.4731C7.24811 14.4779 7.26375 14.4828 7.27749 14.4921L11.5004 17.2915V15.3922V10.1644V5.70831ZM19.1788 12.1728C19.039 14.5019 17.6209 16.572 15.5714 17.6773V19.3584C18.763 18.0581 20.9999 15.2323 20.9999 11.7937C21.0002 11.7071 20.9996 11.62 20.998 11.5327C20.9995 11.4656 21.0002 11.3984 20.9999 11.3312C20.9999 10.4887 20.87 9.68243 20.628 8.92532C20.3461 7.93959 19.8863 7.01246 19.1901 6.26098L19.1746 6.27291C18.2429 5.13952 17.0032 4.23446 15.5714 3.6415V5.35032C16.4784 5.84756 17.2617 6.53688 17.8653 7.35609C18.623 8.38444 19.0975 9.61747 19.1779 10.9322C19.1846 11.1491 19.1876 11.3609 19.189 11.5641C19.1877 11.761 19.1848 11.9648 19.1788 12.1728ZM17.3812 11.3312C17.3812 11.4082 17.3794 11.4859 17.3757 11.5643C17.3794 11.6414 17.3812 11.7179 17.3812 11.7937C17.3812 13.2823 16.6799 15.0717 15.5714 15.9963V13.5407V9.62011V7.05914C16.0204 7.43981 16.4026 7.96472 16.6984 8.55512C17.133 9.42236 17.3812 10.4309 17.3812 11.3312Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

UnmuteIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Unmute Button',
};

export default UnmuteIcon24;
