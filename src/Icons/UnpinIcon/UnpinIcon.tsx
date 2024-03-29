// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const UnpinIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Unpin Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.9187 3L14.9181 3.00064L14.9181 3.00062L14.9187 3ZM14.9181 3.00064L14.4688 3.46875C13.8156 4.1875 13.505 5.09688 13.4338 6.0075L11.9208 7.52043L12.8094 8.40905L14.4494 6.76875L14.6244 6.59375V6.33875C14.6244 5.83687 14.8075 5.36188 15.0544 4.91375H15.055L18.6094 8.46875C18.0938 8.76 17.5369 8.9425 16.9688 8.8L16.6169 8.70312L16.3631 8.95687L14.8604 10.46L15.7491 11.3487L17.0863 10.0113C18.1719 10.1413 19.2819 9.82812 20.0737 9.03625L20.5037 8.58625L20.0744 8.13625L15.3869 3.44875L14.9181 3.00064ZM14.9995 13.7592C14.935 14.9137 14.478 16.0566 13.57 16.9638L13.1213 17.4137L12.6912 16.965L10.055 14.3275L4.87875 19.5231H4V18.6438L9.19625 13.4688L6.50062 10.7731L6.05063 10.3444L6.50062 9.89437C7.39038 9.00462 8.54387 8.53808 9.71486 8.47463L6.125 4.88477L6.99058 4.01919L18.9138 15.9424L18.0482 16.808L14.9995 13.7592ZM13.6477 12.4075C13.9365 13.4604 13.7465 14.6206 13.0631 15.5787L7.945 10.4606C8.85438 9.83563 9.94875 9.54813 10.9725 9.81688L11.0921 9.85185L13.6477 12.4075Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

UnpinIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Unpin Button',
};

export default UnpinIcon;
