// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface ReportIcon24Props {
  /**
   *  Variant of button
   */
  fill?: string;
  /**
   *  Variant of button
   */
  purposeLabel?: string;
}

/**
 * Primary UI component for user interaction
 */
const ReportIcon24 = ({ fill, purposeLabel }:ReportIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Report Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3156 4H8.68444L4 8.68444V15.3156L8.68444 20H15.3156L20 15.3156V8.68444L15.3156 4ZM18.2222 14.5778L14.5778 18.2222H9.42222L5.77778 14.5778V9.42222L9.42222 5.77778H14.5778L18.2222 9.42222V14.5778Z" fill={fill} />
      <path d="M11.9994 16.4448C12.4903 16.4448 12.8883 16.0468 12.8883 15.5559C12.8883 15.065 12.4903 14.667 11.9994 14.667C11.5084 14.667 11.1105 15.065 11.1105 15.5559C11.1105 16.0468 11.5084 16.4448 11.9994 16.4448Z" fill={fill} />
      <path d="M11.1105 7.55566H12.8883V13.7779H11.1105V7.55566Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ReportIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Report Icon',
};

export default ReportIcon24;
