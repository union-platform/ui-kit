// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ArrowBackIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Arrow Back Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0001 11H6.41406L11.7071 5.70697L10.2931 4.29297L2.58606 12L10.2931 19.707L11.7071 18.293L6.41406 13H21.0001V11Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

ArrowBackIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Arrow Back Icon',
};

export default ArrowBackIcon;
