// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ArrowLeftIcon18 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Arrow Left Icon'}
    {...props}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.646446 8.64645C0.451185 8.84171 0.451185 9.15829 0.646446 9.35355L3.82843 12.5355C4.02369 12.7308 4.34027 12.7308 4.53553 12.5355C4.7308 12.3403 4.7308 12.0237 4.53553 11.8284L1.70711 9L4.53553 6.17157C4.7308 5.97631 4.7308 5.65973 4.53553 5.46447C4.34027 5.2692 4.02369 5.2692 3.82843 5.46447L0.646446 8.64645ZM17 8.5L1 8.5V9.5L17 9.5V8.5Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ArrowLeftIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Arrow Left Icon',
};

export default ArrowLeftIcon18;
