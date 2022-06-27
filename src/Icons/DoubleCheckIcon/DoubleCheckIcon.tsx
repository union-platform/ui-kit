// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const DoubleCheckIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Read Icon'}
      {...props}
    >
      <svg style={IconStyles} width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7.46349L5.43003 9.98814L10.9378 3.9178L9.84865 3L5.23188 8.08837L2.87649 6.35459L2 7.46349ZM16 3.9178L14.9109 3L10.305 8.07652L9.76042 7.65667L8.85645 8.74604L10.4814 10L16 3.9178Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

DoubleCheckIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Read Icon',
};

export default DoubleCheckIcon;
