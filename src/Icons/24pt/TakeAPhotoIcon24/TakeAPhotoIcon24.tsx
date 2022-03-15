// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const TakeAPhotoIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Take a Photo Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0001 9.67383C10.4561 9.67383 9.20007 10.9921 9.20007 12.6126C9.20007 14.2331 10.4561 15.5514 12.0001 15.5514C13.544 15.5514 14.8001 14.2331 14.8001 12.6126C14.8001 10.9921 13.544 9.67383 12.0001 9.67383Z" fill={fill} />
      <path d="M17.8802 8.44898H15.8913L14.958 6H9.04203L8.1087 8.44898H7.8V7.22449H6.4V8.44898H6.11977C5.50213 8.44898 5 8.976 5 9.62424V16.8164C5 17.4691 5.50587 18 6.1277 18H17.8723C18.4941 18 19 17.4691 19 16.8164V9.62424C19 8.976 18.4979 8.44898 17.8802 8.44898ZM7.33333 8.44898H6.86667V7.71429H7.33333V8.44898ZM12 17.0204C9.68417 17.0204 7.8 15.0429 7.8 12.6122C7.8 10.1816 9.68417 8.20408 12 8.20408C14.3158 8.20408 16.2 10.1816 16.2 12.6122C16.2 15.0429 14.3158 17.0204 12 17.0204ZM17.1333 11.3878C16.6186 11.3878 16.2 10.9484 16.2 10.4082C16.2 9.86792 16.6186 9.42857 17.1333 9.42857C17.6481 9.42857 18.0667 9.86792 18.0667 10.4082C18.0667 10.9484 17.6481 11.3878 17.1333 11.3878Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

TakeAPhotoIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Take a Photo Icon',
};

export default TakeAPhotoIcon24;
