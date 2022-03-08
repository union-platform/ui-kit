// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const EditIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Edit Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.6057 2.1919C17.8616 1.93603 18.2764 1.93603 18.5322 2.1919L21.8081 5.46775C22.064 5.72362 22.064 6.13845 21.8081 6.39431L8.70467 19.4977C8.61998 19.5824 8.51788 19.6391 8.40989 19.6677L3.83518 20.9748C3.6064 21.0401 3.36016 20.9763 3.19191 20.8081C3.02366 20.6398 2.95986 20.3936 3.02522 20.1648L4.3323 15.5901C4.36093 15.4821 4.41758 15.38 4.50225 15.2953L14.9849 4.8127L17.6057 2.1919ZM5.2896 17.0092L6.99077 18.7104L4.60913 19.3909L5.2896 17.0092ZM8.24139 18.1079L5.89208 15.7586L15.4483 6.20241L17.7976 8.55172L8.24139 18.1079ZM18.7241 7.62517L16.3748 5.27586L18.069 3.58173L20.4183 5.93103L18.7241 7.62517Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

EditIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Edit Icon',
};

export default EditIcon24;
