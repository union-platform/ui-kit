// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const MoreInfoIcon18 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'More Info Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 9.5C2 5.35826 5.35826 2 9.5 2C13.6417 2 17 5.35826 17 9.5C17 13.6417 13.6417 17 9.5 17C5.35826 17 2 13.6417 2 9.5ZM3.27232 9.5C3.27232 12.9386 6.06138 15.7277 9.5 15.7277C12.9386 15.7277 15.7277 12.9386 15.7277 9.5C15.7277 6.06138 12.9386 3.27232 9.5 3.27232C6.06138 3.27232 3.27232 6.06138 3.27232 9.5ZM8.93179 7.12178C8.78109 6.97108 8.69643 6.76669 8.69643 6.55357C8.69643 6.34045 8.78109 6.13606 8.93179 5.98536C9.08249 5.83466 9.28688 5.75 9.5 5.75C9.71312 5.75 9.91751 5.83466 10.0682 5.98536C10.2189 6.13606 10.3036 6.34045 10.3036 6.55357C10.3036 6.76669 10.2189 6.97108 10.0682 7.12178C9.91751 7.27248 9.71312 7.35714 9.5 7.35714C9.28688 7.35714 9.08249 7.27248 8.93179 7.12178ZM8.96429 8.5625C8.96429 8.48884 9.02455 8.42857 9.09821 8.42857H9.90179C9.97545 8.42857 10.0357 8.48884 10.0357 8.5625V13.1161C10.0357 13.1897 9.97545 13.25 9.90179 13.25H9.09821C9.02455 13.25 8.96429 13.1897 8.96429 13.1161V8.5625Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

MoreInfoIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'More Info Icon',
};

export default MoreInfoIcon18;
