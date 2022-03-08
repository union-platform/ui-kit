// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const DeleteIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Delete Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.83333 4.53H8.66667C8.75833 4.53 8.83333 4.4535 8.83333 4.36V4.53H15.1667V4.36C15.1667 4.4535 15.2417 4.53 15.3333 4.53H15.1667V6.06H16.6667V4.36C16.6667 3.60988 16.0688 3 15.3333 3H8.66667C7.93125 3 7.33333 3.60988 7.33333 4.36V6.06H8.83333V4.53ZM19.3333 6.06H4.66667C4.29792 6.06 4 6.36387 4 6.74V7.42C4 7.5135 4.075 7.59 4.16667 7.59H5.425L5.93958 18.7038C5.97292 19.4284 6.56042 20 7.27083 20H16.7292C17.4417 20 18.0271 19.4305 18.0604 18.7038L18.575 7.59H19.8333C19.925 7.59 20 7.5135 20 7.42V6.74C20 6.36387 19.7021 6.06 19.3333 6.06ZM16.5688 18.47H7.43125L6.92708 7.59H17.0729L16.5688 18.47Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

DeleteIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Delete Icon',
};

export default DeleteIcon24;
