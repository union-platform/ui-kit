// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const TelegramIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Telegram Icon'}
      {...props}
    >
      <svg style={IconStyles} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.59259 1.03704H11.4074C12.2665 1.03704 12.963 1.73348 12.963 2.59259V11.4074C12.963 12.2665 12.2665 12.963 11.4074 12.963H2.59259C1.73348 12.963 1.03704 12.2665 1.03704 11.4074V2.59259C1.03704 1.73348 1.73348 1.03704 2.59259 1.03704ZM0 2.59259C0 1.16074 1.16074 0 2.59259 0H11.4074C12.8393 0 14 1.16074 14 2.59259V11.4074C14 12.8393 12.8393 14 11.4074 14H2.59259C1.16074 14 0 12.8393 0 11.4074V2.59259Z" fill={fill} />
        <path d="M11.0367 3.54603L2.76918 6.39708C2.20496 6.59974 2.20822 6.88122 2.66566 7.00674L4.78827 7.59888L9.69937 4.82789C9.93158 4.70154 10.1438 4.76951 9.96935 4.90796L5.9904 8.1193H5.98947L5.9904 8.11972L5.84398 10.0763C6.05848 10.0763 6.15314 9.98831 6.27344 9.88448L7.30444 8.98792L9.44896 10.4045C9.84439 10.5992 10.1284 10.4991 10.2268 10.0771L11.6345 4.14401C11.7786 3.62734 11.414 3.3934 11.0367 3.54603V3.54603Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

TelegramIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Telegram Icon',
};

export default TelegramIcon;
