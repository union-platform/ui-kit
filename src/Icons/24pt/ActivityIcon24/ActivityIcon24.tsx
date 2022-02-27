// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface ActivityIcon24Props {
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
const ActivityIcon24 = ({ fill, purposeLabel }:ActivityIcon24Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Activity Icon'}
  >
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6922 1.06721C17.0875 1.33396 17.2395 1.84279 17.0552 2.28266L14.0498 9.45435L17.9033 11.8351C18.164 11.9962 18.3365 12.268 18.3712 12.5726C18.406 12.8771 18.2991 13.1807 18.0813 13.3964L8.57049 22.8149C8.2316 23.1505 7.70289 23.2001 7.30753 22.9334C6.91217 22.6666 6.76021 22.1578 6.94454 21.7179L9.94988 14.5462L6.09642 12.1654C5.83566 12.0043 5.66319 11.7325 5.62846 11.428C5.59373 11.1235 5.70058 10.8198 5.91837 10.6042L15.4292 1.18562C15.7681 0.850029 16.2968 0.800457 16.6922 1.06721ZM8.22814 11.1315L11.728 13.2939C12.1467 13.5525 12.3149 14.0773 12.1247 14.5311L10.7283 17.8633L15.7716 12.869L12.2717 10.7067C11.8531 10.448 11.6848 9.9233 11.875 9.46946L13.2714 6.13727L8.22814 11.1315Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ActivityIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Check Button',
};

export default ActivityIcon24;
