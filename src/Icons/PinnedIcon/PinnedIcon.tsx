// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const PinnedIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Pinned Icon'}
      {...props}
    >
      <svg style={IconStyles} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2623 2L10.8806 2.39717C10.3265 3.00617 10.063 3.77668 10.0026 4.54825L7.84844 6.69985C6.53889 6.46685 5.1302 6.83383 4.12126 7.84159L3.73953 8.22287L4.12126 8.58615L6.40794 10.8701L2 15.2549V16H2.74544L7.13641 11.5978L9.37272 13.8325L9.73748 14.2127L10.1182 13.8314C11.2294 12.7225 11.5443 11.1979 11.2119 9.82797L13.101 7.94061C14.0219 8.05076 14.9635 7.78545 15.6352 7.1145L16 6.73322L15.6358 6.35193L11.6594 2.38022L11.2618 2.00053L11.2623 2ZM11.3779 3.62152L14.393 6.63366C13.9556 6.88043 13.4832 7.03507 13.0013 6.91433L12.7028 6.83224L12.4875 7.04724L10.2682 9.26452L10.036 9.49752L10.1357 9.81155C10.4469 10.7446 10.3027 11.7974 9.68818 12.6579L5.34651 8.32137C6.11793 7.79181 7.04628 7.54821 7.91472 7.77592L8.19571 7.858L8.41203 7.643L10.8641 5.19325L11.0126 5.04498V4.82891C11.0126 4.40368 11.1679 4.00121 11.3773 3.62152H11.3779Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

PinnedIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Pinned Icon',
};

export default PinnedIcon;
