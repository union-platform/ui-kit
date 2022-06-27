// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const OpenIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Open Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.8 4H19.2C20.1927 4 21 4.79733 21 5.77778V18.2222C21 19.2027 20.1927 20 19.2 20H14.7V18.2222H19.2V7.55556H4.8V18.2222H9.3V20H4.8C3.8073 20 3 19.2027 3 18.2222V5.77778C3 4.79733 3.8073 4 4.8 4ZM12.9265 15.7333V20H11.0735V15.7333H8.29412L12 11.4667L15.7059 15.7333H12.9265Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

OpenIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Open Icon',
};

export default OpenIcon;
