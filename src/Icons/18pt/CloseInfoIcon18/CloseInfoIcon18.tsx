// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const CloseInfoIcon18 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Close Info Icon'}
    {...props}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 9.5C2 5.35826 5.35826 2 9.5 2C13.6417 2 17 5.35826 17 9.5C17 13.6417 13.6417 17 9.5 17C5.35826 17 2 13.6417 2 9.5ZM3.27232 9.5C3.27232 12.9386 6.06138 15.7277 9.5 15.7277C12.9386 15.7277 15.7277 12.9386 15.7277 9.5C15.7277 6.06138 12.9386 3.27232 9.5 3.27232C6.06138 3.27232 3.27232 6.06138 3.27232 9.5ZM12.2677 6.71762C12.3414 6.71762 12.4017 6.77789 12.4017 6.85155C12.4017 6.88336 12.3916 6.91517 12.3715 6.93861L10.1935 9.53347L12.3682 12.1267C12.3883 12.1518 12.4 12.1819 12.4 12.2137C12.4 12.2891 12.3397 12.3476 12.2661 12.3476L11.1611 12.3426L9.49876 10.3605L7.83638 12.3443L6.72979 12.3493C6.65613 12.3493 6.59586 12.2891 6.59586 12.2154C6.59622 12.1836 6.60744 12.1529 6.62767 12.1283L8.80568 9.53515L6.62767 6.94028C6.60758 6.91517 6.59586 6.88503 6.59586 6.85323C6.59586 6.77789 6.65613 6.7193 6.72979 6.7193L7.83638 6.72432L9.49876 8.70646L11.1628 6.72265L12.2677 6.71762Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

CloseInfoIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Close Info Icon',
};

export default CloseInfoIcon18;
