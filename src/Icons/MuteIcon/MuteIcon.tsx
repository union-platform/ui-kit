// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const MuteIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Muted Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5529 17.7667L17.1873 16.36C18.2001 15.1475 18.7549 13.5996 18.75 12C18.75 9.15522 17.0813 6.81737 14.7004 5.74163V7.13238C16.3118 8.09617 17.3999 9.94656 17.3999 12C17.3969 13.2354 17.0004 14.4356 16.2712 15.4164L15.4038 14.5228C15.8102 13.7635 16.0505 12.8275 16.0505 12C16.0505 10.7685 15.5274 9.28804 14.7004 8.52313V13.7982L13.3504 12.4075V6.437C13.3503 6.31122 13.3171 6.18781 13.2544 6.07992C13.1916 5.97203 13.1016 5.88369 12.994 5.82432C12.8863 5.76495 12.7651 5.73677 12.6431 5.74278C12.5211 5.74879 12.403 5.78877 12.3014 5.85845L9.11591 8.04541L6.40228 5.25L5.44778 6.23326L17.5984 18.75L18.5529 17.7667ZM12.0003 7.73596V11.0167L10.0893 9.04814L12.0003 7.73596ZM6.60006 15.4769H8.42063L12.3007 18.1415C12.4025 18.2112 12.5207 18.2512 12.6427 18.2573C12.7647 18.2634 12.8861 18.2354 12.994 18.1763C13.1017 18.1169 13.1918 18.0285 13.2545 17.9204C13.3173 17.8124 13.3504 17.6889 13.3504 17.563V16.2564L12.0003 14.8656V16.264L8.9998 14.2029C8.98293 14.1911 8.962 14.189 8.94445 14.18C8.86474 14.1353 8.77698 14.1078 8.68659 14.0993C8.66499 14.0972 8.64676 14.0861 8.62516 14.0861H6.60006V9.91388H7.19342L5.99389 8.6782C5.77105 8.7931 5.58353 8.96944 5.4522 9.1876C5.32087 9.40576 5.25087 9.65718 5.25 9.91388V14.0861C5.25 14.8531 5.8555 15.4769 6.60006 15.4769Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

MuteIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Muted Icon',
};

export default MuteIcon;
