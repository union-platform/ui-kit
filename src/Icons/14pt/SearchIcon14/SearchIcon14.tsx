// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const SearchIcon14 = ({ fill, purposeLabel }: IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Search Icon'}
  >
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6155 12.2262L10.4034 9.01416C9.92482 9.75843 9.29145 10.3914 8.54712 10.87L11.7594 14.0821C12.2722 14.5948 13.1037 14.5948 13.6154 14.0821C14.1283 13.5703 14.1283 12.7389 13.6155 12.2262Z" fill={fill} />
      <path d="M10.5008 5.71653C10.5008 2.81731 8.14993 0.466553 5.25041 0.466553C2.35095 0.466553 0 2.81731 0 5.71653C0 8.61576 2.35095 10.9664 5.25041 10.9664C8.14993 10.9664 10.5008 8.61576 10.5008 5.71653ZM5.25041 9.65387C3.07897 9.65387 1.31264 7.88782 1.31264 5.71656C1.31264 3.5453 3.07897 1.77911 5.25041 1.77911C7.42179 1.77911 9.18827 3.5453 9.18827 5.71656C9.18827 7.88782 7.42179 9.65387 5.25041 9.65387Z" fill={fill} />
      <path d="M2.18677 5.71651H3.06173C3.06173 4.51036 4.04322 3.52903 5.24944 3.52903V2.65405C3.5609 2.65405 2.18677 4.02808 2.18677 5.71651Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

SearchIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Search Button',
};

export default SearchIcon14;
