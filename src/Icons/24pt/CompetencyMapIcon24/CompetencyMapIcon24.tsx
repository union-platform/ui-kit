// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const CompetencyMapIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Competency Map Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.6164 10.8473C18.93 7.61456 16.384 5.06907 13.1509 4.38349C12.9631 3.59025 12.2502 3 11.3995 3C10.5487 3 9.83568 3.59031 9.64781 4.38367C5.84967 5.18955 3 8.56215 3 12.6003C3 17.2394 6.76079 21 11.3999 21C15.4388 21 18.8121 18.1493 19.6171 14.3502C20.41 14.1621 21 13.4494 21 12.5989C21 11.7481 20.4097 11.0352 19.6164 10.8473ZM18.9933 10.8107C18.3193 7.93962 16.0589 5.67988 13.1877 5.00651C13.0852 5.90332 12.3237 6.59983 11.3995 6.59983C10.4753 6.59983 9.71373 5.90339 9.61119 5.00669C6.16546 5.81513 3.59996 8.90815 3.59996 12.6003C3.59996 16.908 7.09208 20.4001 11.3999 20.4001C15.0927 20.4001 18.1862 17.8337 18.9941 14.3871C18.097 14.2849 17.4001 13.5233 17.4001 12.5989C17.4001 11.6748 18.0966 10.9132 18.9933 10.8107ZM11.7003 16.2C13.5227 16.2 15.0001 14.7227 15.0001 12.9002C15.0001 11.0777 13.5227 9.60032 11.7003 9.60032C9.87767 9.60032 8.40028 11.0777 8.40028 12.9002C8.40028 14.7227 9.87767 16.2 11.7003 16.2Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

CompetencyMapIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Competency Map Icon',
};

export default CompetencyMapIcon24;
