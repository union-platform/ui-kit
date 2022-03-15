// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const DownloadIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Download Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.2157 11.3948L12.0243 17.3846L6.83773 11.3948C6.78646 11.3442 6.74495 11.2819 6.71549 11.2119C6.6862 11.1418 6.6696 11.0656 6.66699 10.9877C6.66618 10.9616 6.66683 10.9354 6.66911 10.9094C6.67367 10.8584 6.68408 10.8081 6.70036 10.76C6.72494 10.6876 6.76237 10.6218 6.81006 10.5668C6.84701 10.524 6.88981 10.4884 6.93652 10.4614C6.94987 10.4537 6.96354 10.4467 6.97754 10.4404C7.0402 10.412 7.10742 10.3989 7.1748 10.4019C7.21338 10.4036 7.25146 10.4105 7.28841 10.4225C7.31608 10.4315 7.3431 10.4432 7.36898 10.4578C7.42969 10.4917 7.48372 10.5397 7.52767 10.5988L11.535 15.2224V3.56453C11.535 3.4148 11.5864 3.27121 11.6782 3.16538C11.77 3.05946 11.8945 3 12.0243 3C12.154 3 12.2785 3.05946 12.3703 3.16538C12.4619 3.27121 12.5135 3.4148 12.5135 3.56453V15.2224L16.5257 10.5988C16.5692 10.5559 16.6185 10.5224 16.6711 10.4995C16.7318 10.473 16.7969 10.4605 16.863 10.4634C16.986 10.4689 17.1029 10.5279 17.1899 10.6284C17.2772 10.7289 17.3283 10.8637 17.333 11.0058C17.3377 11.1479 17.2959 11.2868 17.2157 11.3948ZM4.57145 18.6923H19.4285C19.5801 18.6923 19.7254 18.7612 19.8327 18.8838C19.9398 19.0065 20 19.1727 20 19.3462C20 19.5196 19.9398 19.6858 19.8327 19.8085C19.7254 19.9311 19.5801 20 19.4285 20H4.57145C4.41992 20 4.27458 19.9311 4.16732 19.8085C4.06022 19.6858 4 19.5196 4 19.3462C4 19.1727 4.06022 19.0065 4.16732 18.8838C4.27458 18.7612 4.41992 18.6923 4.57145 18.6923Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

DownloadIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Download Icon',
};

export default DownloadIcon24;
