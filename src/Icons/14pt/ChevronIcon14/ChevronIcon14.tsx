// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ChevronIcon14 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Chevron Icon'}
    {...props}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.293 3.43945L6.99997 7.73245L2.70697 3.43945L1.29297 4.85345L6.99997 10.5605L12.707 4.85345L11.293 3.43945Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ChevronIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Chevron Icon',
};

export default ChevronIcon14;
