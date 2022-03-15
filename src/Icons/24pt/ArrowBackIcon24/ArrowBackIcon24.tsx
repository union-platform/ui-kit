// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ArrowBackIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Arrow Back Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0001 11H6.41406L11.7071 5.70697L10.2931 4.29297L2.58606 12L10.2931 19.707L11.7071 18.293L6.41406 13H21.0001V11Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ArrowBackIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Arrow Back Icon',
};

export default ArrowBackIcon24;
