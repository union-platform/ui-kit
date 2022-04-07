// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const SearchIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Search Icon'}
    {...props}
  >
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.875 18.8852L16.566 14.5762C15.924 15.5746 15.0743 16.4238 14.0758 17.0658L18.3851 21.3748C19.0731 22.0626 20.1885 22.0626 20.875 21.3748C21.563 20.6882 21.563 19.5729 20.875 18.8852Z" fill={fill} />
      <path d="M16.6966 10.1522C16.6966 6.26292 13.5429 3.10938 9.65319 3.10938C5.76355 3.10938 2.60974 6.26292 2.60974 10.1522C2.60974 14.0416 5.76355 17.195 9.65319 17.195C13.5429 17.195 16.6966 14.0416 16.6966 10.1522ZM9.65319 15.4342C6.7402 15.4342 4.37065 13.065 4.37065 10.1523C4.37065 7.23953 6.7402 4.87018 9.65319 4.87018C12.5661 4.87018 14.9358 7.23953 14.9358 10.1523C14.9358 13.065 12.5661 15.4342 9.65319 15.4342Z" fill={fill} />
      <path d="M5.54346 10.1522H6.71722C6.71722 8.53419 8.03389 7.21773 9.65204 7.21773V6.04395C7.38686 6.04395 5.54346 7.8872 5.54346 10.1522Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

SearchIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Search Button',
};

export default SearchIcon24;
