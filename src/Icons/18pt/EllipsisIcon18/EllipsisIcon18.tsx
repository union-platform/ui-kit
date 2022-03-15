// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const EllipsisIcon18 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Ellipsis Icon'}
    {...props}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9C4 10.1 3.1 11 2 11C0.9 11 0 10.1 0 9C0 7.9 0.9 7 2 7C3.1 7 4 7.9 4 9ZM16 7C14.9 7 14 7.9 14 9C14 10.1 14.9 11 16 11C17.1 11 18 10.1 18 9C18 7.9 17.1 7 16 7ZM9 7C7.9 7 7 7.9 7 9C7 10.1 7.9 11 9 11C10.1 11 11 10.1 11 9C11 7.9 10.1 7 9 7Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

EllipsisIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Ellipsis Icon',
};

export default EllipsisIcon18;
