// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const ForwardIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Forward Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.0023 7.26315C13.9747 7.25099 13.9444 7.24597 13.9144 7.24855C13.8843 7.25113 13.8554 7.26122 13.8303 7.27789C13.8051 7.29457 13.7846 7.3173 13.7705 7.34399C13.7564 7.37068 13.7493 7.40048 13.7498 7.43065V8.8719C13.7498 9.03766 13.6839 9.19663 13.5667 9.31384C13.4495 9.43105 13.2905 9.4969 13.1248 9.4969C12.291 9.4969 10.6085 9.50315 8.99978 10.5244C7.76978 11.3044 6.51228 12.7244 5.75603 15.3694C7.03103 14.1406 8.48728 13.4744 9.76228 13.1219C10.546 12.9055 11.3514 12.7772 12.1635 12.7394C12.496 12.7248 12.829 12.7281 13.161 12.7494H13.1773L13.1835 12.7506H13.1848L13.1248 13.3719L13.1873 12.7494C13.3416 12.7649 13.4846 12.8372 13.5885 12.9522C13.6925 13.0673 13.7499 13.2168 13.7498 13.3719V14.8131C13.7498 14.9481 13.8873 15.0331 14.0023 14.9806L18.9823 11.3144C18.9992 11.3018 19.0167 11.2902 19.0348 11.2794C19.062 11.2631 19.0845 11.24 19.1001 11.2124C19.1157 11.1848 19.1239 11.1536 19.1239 11.1219C19.1239 11.0902 19.1157 11.059 19.1001 11.0314C19.0845 11.0038 19.062 10.9807 19.0348 10.9644C19.0167 10.9536 18.9992 10.942 18.9823 10.9294L14.0023 7.26315ZM12.4998 13.9794C11.6872 13.9935 10.8796 14.1098 10.096 14.3256C8.43853 14.7856 6.47603 15.8269 5.17103 18.1756C5.10046 18.3024 4.98801 18.4006 4.85296 18.4535C4.71791 18.5064 4.56866 18.5107 4.4308 18.4656C4.29294 18.4205 4.17504 18.3289 4.09732 18.2065C4.01959 18.084 3.98688 17.9383 4.00478 17.7944C4.58478 13.1569 6.36228 10.7169 8.32978 9.4694C9.88603 8.4819 11.4885 8.2919 12.4998 8.25565V7.43065C12.4997 7.17323 12.569 6.92056 12.7006 6.69929C12.8321 6.47802 13.0209 6.29636 13.2471 6.17347C13.4733 6.05058 13.7285 5.99103 13.9857 6.00109C14.2429 6.01116 14.4926 6.09046 14.7085 6.23065L19.701 9.90565C19.9074 10.0345 20.0776 10.2137 20.1957 10.4265C20.3137 10.6393 20.3756 10.8786 20.3756 11.1219C20.3756 11.3652 20.3137 11.6045 20.1957 11.8173C20.0776 12.0301 19.9074 12.2093 19.701 12.3381L14.7085 16.0131C14.4926 16.1533 14.2429 16.2326 13.9857 16.2427C13.7285 16.2528 13.4733 16.1932 13.2471 16.0703C13.0209 15.9474 12.8321 15.7658 12.7006 15.5445C12.569 15.3232 12.4997 15.0706 12.4998 14.8131V13.9794Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

ForwardIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Forward Icon',
};

export default ForwardIcon24;
