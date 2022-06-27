// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const CameraIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Camera Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9.5C10.0149 9.5 8.40002 11.1149 8.40002 13.1C8.40002 15.0851 10.0149 16.7 12 16.7C13.9851 16.7 15.6 15.0851 15.6 13.1C15.6 11.1149 13.9851 9.5 12 9.5Z" fill={fill} />
        <path d="M19.5603 8H17.0031L15.8031 5H8.1969L6.9969 8H6.6V6.5H4.8V8H4.4397C3.6456 8 3 8.6456 3 9.4397V18.2501C3 19.0496 3.6504 19.7 4.4499 19.7H19.5501C20.3496 19.7 21 19.0496 21 18.2501V9.4397C21 8.6456 20.3544 8 19.5603 8ZM6 8H5.4V7.1H6V8ZM12 18.5C9.0225 18.5 6.6 16.0775 6.6 13.1C6.6 10.1225 9.0225 7.7 12 7.7C14.9775 7.7 17.4 10.1225 17.4 13.1C17.4 16.0775 14.9775 18.5 12 18.5ZM18.6 11.6C17.9382 11.6 17.4 11.0618 17.4 10.4C17.4 9.7382 17.9382 9.2 18.6 9.2C19.2618 9.2 19.8 9.7382 19.8 10.4C19.8 11.0618 19.2618 11.6 18.6 11.6Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

CameraIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Camera Icon',
};

export default CameraIcon;
