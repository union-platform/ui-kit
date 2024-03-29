// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ClipIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Clip Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3855 10.4102C16.3855 10.4102 17.1134 9.85666 16.5593 9.30314C16.0052 8.74961 15.4665 9.46391 15.4665 9.46391L9.89622 15.0354C9.89622 15.0354 8.59161 16.7191 7.59965 15.701C6.60888 14.6818 8.26471 13.4039 8.26471 13.4039L15.5685 6.10063C15.5685 6.10063 17.273 4.22291 18.8755 5.82417C20.4755 7.42601 18.5925 9.13405 18.5925 9.13405L10.3857 17.3408C10.3857 17.3408 7.75984 20.3743 5.32918 17.943C2.89853 15.5118 5.96162 12.9156 5.96162 12.9156L12.1922 6.68323C12.1922 6.68323 12.8899 6.10063 12.3672 5.57618C11.8422 5.05231 11.2608 5.75119 11.2608 5.75119L4.11119 12.9008C4.11119 12.9008 1.41237 15.8606 4.42622 18.8739C7.44006 21.8889 10.4017 19.1901 10.4017 19.1901L20.2281 9.36246C20.2281 9.36246 22.1942 7.19404 19.8502 4.84882C17.5062 2.5036 15.3372 4.46972 15.3372 4.46972L6.88179 12.9239C6.88179 12.9239 4.71633 14.6853 6.68126 16.6491C8.64619 18.6152 10.3756 16.4177 10.3756 16.4177L16.3855 10.4102Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

ClipIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Clip Icon',
};

export default ClipIcon;
