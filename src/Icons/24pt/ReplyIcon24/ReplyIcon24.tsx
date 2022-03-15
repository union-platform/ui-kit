// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ReplyIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Reply Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3733 7.26315C10.4009 7.25099 10.4312 7.24597 10.4612 7.24855C10.4913 7.25113 10.5202 7.26122 10.5454 7.27789C10.5705 7.29457 10.591 7.3173 10.6051 7.34399C10.6192 7.37068 10.6263 7.40048 10.6258 7.43065V8.8719C10.6258 9.03766 10.6917 9.19663 10.8089 9.31384C10.9261 9.43105 11.0851 9.4969 11.2508 9.4969C12.0846 9.4969 13.7671 9.50315 15.3758 10.5244C16.6058 11.3044 17.8633 12.7244 18.6196 15.3694C17.3446 14.1406 15.8883 13.4744 14.6133 13.1219C13.8296 12.9055 13.0242 12.7772 12.2121 12.7394C11.8796 12.7248 11.5467 12.7281 11.2146 12.7494H11.1983L11.1921 12.7506H11.1908L11.2508 13.3719L11.1883 12.7494C11.0341 12.7649 10.8911 12.8372 10.7871 12.9522C10.6832 13.0673 10.6257 13.2168 10.6258 13.3719V14.8131C10.6258 14.9481 10.4883 15.0331 10.3733 14.9806L5.39333 11.3144C5.37644 11.3018 5.35891 11.2902 5.34083 11.2794C5.31365 11.2631 5.29116 11.24 5.27554 11.2124C5.25993 11.1848 5.25172 11.1536 5.25172 11.1219C5.25172 11.0902 5.25993 11.059 5.27554 11.0314C5.29116 11.0038 5.31365 10.9807 5.34083 10.9644C5.35891 10.9536 5.37644 10.942 5.39333 10.9294L10.3733 7.26315ZM11.8758 13.9794C12.6884 13.9935 13.496 14.1098 14.2796 14.3256C15.9371 14.7856 17.8996 15.8269 19.2046 18.1756C19.2752 18.3024 19.3876 18.4006 19.5226 18.4535C19.6577 18.5064 19.8069 18.5107 19.9448 18.4656C20.0827 18.4205 20.2006 18.3289 20.2783 18.2065C20.356 18.084 20.3887 17.9383 20.3708 17.7944C19.7908 13.1569 18.0133 10.7169 16.0458 9.4694C14.4896 8.4819 12.8871 8.2919 11.8758 8.25565V7.43065C11.8759 7.17323 11.8066 6.92056 11.675 6.69929C11.5435 6.47802 11.3547 6.29636 11.1285 6.17347C10.9023 6.05058 10.6471 5.99103 10.3899 6.00109C10.1327 6.01116 9.88297 6.09046 9.66708 6.23065L4.67458 9.90565C4.46818 10.0345 4.29796 10.2137 4.17995 10.4265C4.06194 10.6393 4.00002 10.8786 4.00002 11.1219C4.00002 11.3652 4.06194 11.6045 4.17995 11.8173C4.29796 12.0301 4.46818 12.2093 4.67458 12.3381L9.66708 16.0131C9.88297 16.1533 10.1327 16.2326 10.3899 16.2427C10.6471 16.2528 10.9023 16.1932 11.1285 16.0703C11.3547 15.9474 11.5435 15.7658 11.675 15.5445C11.8066 15.3232 11.8759 15.0706 11.8758 14.8131V13.9794Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ReplyIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Reply Icon',
};

export default ReplyIcon24;
