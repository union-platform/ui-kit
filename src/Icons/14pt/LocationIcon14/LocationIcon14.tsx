// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const LocationIcon14 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Location Icon'}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.99977 0C4.15802 0 1.84583 2.3122 1.84583 5.15424C1.84583 5.89555 1.99756 6.60334 2.29657 7.25811C3.5852 10.0779 6.05587 13.0551 6.78257 13.9003C6.83701 13.9635 6.91639 13.9999 6.99992 13.9999C7.08345 13.9999 7.16282 13.9635 7.21727 13.9003C7.94368 13.0552 10.4143 10.0782 11.7034 7.25811C12.0026 6.60334 12.1542 5.89555 12.1542 5.15424C12.1539 2.3122 9.84167 0 6.99977 0ZM6.99977 7.83136C5.52359 7.83136 4.32251 6.63027 4.32251 5.15409C4.32251 3.67777 5.52359 2.47668 6.99977 2.47668C8.47595 2.47668 9.67704 3.67777 9.67704 5.15409C9.67719 6.63027 8.4761 7.83136 6.99977 7.83136Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

LocationIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Location Icon',
};

export default LocationIcon14;
