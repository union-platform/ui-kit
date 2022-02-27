// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface PinnedIcon14Props {
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
const PinnedIcon14 = ({ fill, purposeLabel }:PinnedIcon14Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Pinned Icon'}
  >
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.05496 7.72395L8.95955 7.18678L11.2877 4.85816L9.80941 3.37937L7.48021 5.70747L6.94354 5.61207C6.46718 5.52667 5.97647 5.57495 5.5259 5.75155L8.91599 9.14103C9.09233 8.69058 9.14043 8.20008 9.05496 7.72395ZM6.85124 8.55564L3.89255 11.5132C3.7945 11.6113 3.66151 11.6663 3.52284 11.6663C3.38418 11.6663 3.25119 11.6113 3.15314 11.5132C3.05509 11.4152 3 11.2822 3 11.1435C3 11.0048 3.05509 10.8719 3.15314 10.7738L6.11131 7.81625L3.89255 5.59755C4.30956 5.17991 4.82147 4.86943 5.38456 4.69264C5.94764 4.51585 6.54516 4.47799 7.12606 4.58231L9.06896 2.63946C9.16608 2.54231 9.28139 2.46524 9.40831 2.41265C9.53522 2.36007 9.67125 2.33301 9.80863 2.33301C9.94601 2.33301 10.082 2.36007 10.209 2.41265C10.3359 2.46524 10.4512 2.54231 10.5483 2.63946L12.0271 4.11877C12.2232 4.31489 12.3333 4.58085 12.3333 4.85816C12.3333 5.13547 12.2232 5.40143 12.0271 5.59755L10.0842 7.5404C10.1885 8.12128 10.1507 8.71878 9.97389 9.28185C9.79709 9.84492 9.48661 10.3568 9.06896 10.7738L6.85124 8.55564Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

PinnedIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Pinned Icon',
};

export default PinnedIcon14;
