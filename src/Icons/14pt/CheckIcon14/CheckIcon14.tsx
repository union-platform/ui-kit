// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const CheckIcon14 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Check Icon'}
  >
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.88414 6.56497C2.59412 6.2692 2.59412 5.78967 2.88414 5.4939C3.17415 5.19814 3.64435 5.19814 3.93436 5.4939L7.08504 8.70711C7.37505 9.00287 7.37505 9.48241 7.08504 9.77817C6.79503 10.0739 6.32483 10.0739 6.03482 9.77817L2.88414 6.56497Z" fill={fill} />
      <path d="M11.3989 3.22183C11.6889 2.92606 12.1591 2.92606 12.4491 3.22183C12.7391 3.51759 12.7391 3.99713 12.4491 4.29289L7.19798 9.64823C6.90797 9.944 6.43777 9.944 6.14776 9.64823C5.85774 9.35246 5.85774 8.87293 6.14776 8.57716L11.3989 3.22183Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

CheckIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Check Icon',
};

export default CheckIcon14;
