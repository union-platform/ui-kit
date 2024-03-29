// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const EmailIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Email Icon'}
      {...props}
    >
      <svg style={IconStyles} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.59259 1.03704H11.4074C12.2665 1.03704 12.963 1.73348 12.963 2.59259V11.4074C12.963 12.2665 12.2665 12.963 11.4074 12.963H2.59259C1.73348 12.963 1.03704 12.2665 1.03704 11.4074V2.59259C1.03704 1.73348 1.73348 1.03704 2.59259 1.03704ZM0 2.59259C0 1.16074 1.16074 0 2.59259 0H11.4074C12.8393 0 14 1.16074 14 2.59259V11.4074C14 12.8393 12.8393 14 11.4074 14H2.59259C1.16074 14 0 12.8393 0 11.4074V2.59259ZM2.59259 7C2.59259 4.56711 4.56711 2.59259 7 2.59259C9.43289 2.59259 11.4074 4.56711 11.4074 7V7.63026C11.4074 8.49852 10.7331 9.2037 9.86481 9.2037C9.34033 9.2037 8.8467 8.94807 8.56022 8.55581C8.16356 8.95689 7.60822 9.2037 7 9.2037C5.78356 9.2037 4.7963 8.21644 4.7963 7C4.7963 5.78356 5.78356 4.7963 7 4.7963C8.21644 4.7963 9.2037 5.78356 9.2037 7V7.63026C9.2037 7.97844 9.51663 8.32222 9.86481 8.32222C10.213 8.32222 10.5259 7.97844 10.5259 7.63026V7C10.5259 5.08719 8.91282 3.47407 7 3.47407C5.08719 3.47407 3.47407 5.08719 3.47407 7C3.47407 8.91282 5.08719 10.5259 7 10.5259H9.2037V11.4074H7C4.56711 11.4074 2.59259 9.43289 2.59259 7ZM5.67778 7C5.67778 7.73163 6.26837 8.32222 7 8.32222C7.73163 8.32222 8.32222 7.73163 8.32222 7C8.32222 6.26837 7.73163 5.67778 7 5.67778C6.26837 5.67778 5.67778 6.26837 5.67778 7Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

EmailIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Email Icon',
};

export default EmailIcon;
