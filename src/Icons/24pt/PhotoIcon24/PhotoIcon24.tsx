// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const PhotoIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Photo Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2222 5.77778V18.2222H5.77778V5.77778H18.2222ZM18.2222 4H5.77778C4.8 4 4 4.8 4 5.77778V18.2222C4 19.2 4.8 20 5.77778 20H18.2222C19.2 20 20 19.2 20 18.2222V5.77778C20 4.8 19.2 4 18.2222 4ZM13.9022 11.8756L11.2356 15.3156L9.33333 13.0133L6.66667 16.4444H17.3333L13.9022 11.8756Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

PhotoIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Photo Icon',
};

export default PhotoIcon24;
