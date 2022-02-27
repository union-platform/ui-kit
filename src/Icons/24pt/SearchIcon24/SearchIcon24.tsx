// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface SearchIcon24Props {
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
const SearchIcon24 = ({ fill, purposeLabel }:SearchIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Search Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3412 20.1597L17.8348 14.6533C17.0144 15.9292 15.9286 17.0144 14.6526 17.8348L20.1594 23.3412C21.0385 24.2201 22.4639 24.2201 23.3411 23.3412C24.2203 22.4638 24.2203 21.0385 23.3412 20.1597Z" fill={fill} />
      <path d="M18.0016 8.99997C18.0016 4.02987 13.9716 0 9.00095 0C4.03044 0 0.000244141 4.02987 0.000244141 8.99997C0.000244141 13.9701 4.03044 17.9997 9.00095 17.9997C13.9716 17.9997 18.0016 13.9701 18.0016 8.99997ZM9.00095 15.7497C5.27849 15.7497 2.25048 12.7222 2.25048 9.00002C2.25048 5.27786 5.27849 2.2501 9.00095 2.2501C12.7233 2.2501 15.7516 5.27786 15.7516 9.00002C15.7516 12.7222 12.7233 15.7497 9.00095 15.7497Z" fill={fill} />
      <path d="M3.74927 8.99993H5.2492C5.2492 6.93224 6.93176 5.24996 8.99957 5.24996V3.75C6.10492 3.75 3.74927 6.10547 3.74927 8.99993Z" fill={fill} />
    </svg>

  </AccessibleIcon.Root>
);

SearchIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Search Button',
};

export default SearchIcon24;
