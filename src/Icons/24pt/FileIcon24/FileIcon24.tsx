// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const FileIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'File Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.2691 4H6.06762C5.77881 4.00796 5.50467 4.13422 5.30479 4.35136C5.10491 4.5685 4.99543 4.85897 5.00015 5.15964V19.8404C4.99543 20.141 5.10491 20.4315 5.30479 20.6486C5.50467 20.8658 5.77881 20.992 6.06762 21H17.9324C18.2212 20.992 18.4953 20.8658 18.6952 20.6486C18.8951 20.4315 19.0046 20.141 18.9999 19.8404V8.80857L14.2691 4ZM14.0941 5.51179L17.5941 9.09393H14.0941V5.51179ZM6.16679 19.7857V5.21429H13.1666V10.0714H17.8332V19.7857H6.16679Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

FileIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'File Icon',
};

export default FileIcon24;
