// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const BlockIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Block Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C7.5888 4 4 7.5888 4 12C4 16.4112 7.5888 20 12 20C16.4112 20 20 16.4112 20 12C20 7.5888 16.4112 4 12 4ZM5.6 12C5.6 10.5232 6.1072 9.1664 6.9504 8.0824L15.9176 17.0496C14.7992 17.9247 13.42 18.4001 12 18.4C8.4712 18.4 5.6 15.5288 5.6 12ZM17.0496 15.9176L8.0824 6.9504C9.20084 6.07544 10.58 5.60005 12 5.6C15.5288 5.6 18.4 8.4712 18.4 12C18.3996 13.42 17.9242 14.799 17.0496 15.9176Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

BlockIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Block Icon',
};

export default BlockIcon;
