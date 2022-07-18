// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps, IconStyles } from '../icon.config';
import IconWrapper from '../IconWrapper/iconWrapper';

/**
 *  Icon from Union's Figma UI-kit.
 */
const LeaveIcon = ({
  fill, purposeLabel, size, ...props
}:IconProps) => (
  <IconWrapper size={size}>
    <AccessibleIcon.Root
      label={purposeLabel || 'Leave Icon'}
      {...props}
    >
      <svg style={IconStyles} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.6224 6.60576C5.02091 6.2179 5.56141 6 6.125 6H13.4107C13.9743 6 14.5148 6.2179 14.9133 6.60576C15.3118 6.99362 15.5357 7.51967 15.5357 8.06818V9.54545C15.5357 9.8718 15.2639 10.1364 14.9286 10.1364C14.5933 10.1364 14.3214 9.8718 14.3214 9.54545V8.06818C14.3214 7.8331 14.2255 7.60765 14.0547 7.44143C13.8839 7.2752 13.6523 7.18182 13.4107 7.18182H6.125C5.88346 7.18182 5.65182 7.2752 5.48103 7.44143C5.31024 7.60765 5.21429 7.8331 5.21429 8.06818V16.9318C5.21429 17.1669 5.31024 17.3923 5.48103 17.5586C5.65182 17.7248 5.88346 17.8182 6.125 17.8182H13.4107C13.6523 17.8182 13.8839 17.7248 14.0547 17.5586C14.2255 17.3923 14.3214 17.1669 14.3214 16.9318V15.4545C14.3214 15.1282 14.5933 14.8636 14.9286 14.8636C15.2639 14.8636 15.5357 15.1282 15.5357 15.4545V16.9318C15.5357 17.4803 15.3118 18.0064 14.9133 18.3942C14.5148 18.7821 13.9743 19 13.4107 19H6.125C5.56141 19 5.02091 18.7821 4.6224 18.3942C4.22388 18.0064 4 17.4803 4 16.9318V8.06818C4 7.51967 4.22388 6.99362 4.6224 6.60576ZM16.9278 9.12762C17.1649 8.89685 17.5494 8.89685 17.7865 9.12762L20.8222 12.0822C20.8805 12.1389 20.9245 12.2044 20.9541 12.2742C20.9809 12.3375 20.996 12.4043 20.9993 12.4717C20.9998 12.4811 21 12.4905 21 12.5C21 12.5016 21 12.5032 21 12.5048C20.9993 12.583 20.9831 12.6576 20.9541 12.7258C20.9245 12.7956 20.8805 12.8611 20.8222 12.9178L17.7865 15.8724C17.5494 16.1031 17.1649 16.1031 16.9278 15.8724C16.6907 15.6416 16.6907 15.2675 16.9278 15.0367L18.9271 13.0909H10.0335C9.69817 13.0909 9.42634 12.8264 9.42634 12.5C9.42634 12.1736 9.69817 11.9091 10.0335 11.9091H18.9271L16.9278 9.96329C16.6907 9.73253 16.6907 9.35838 16.9278 9.12762Z" fill={fill} />
      </svg>
    </AccessibleIcon.Root>
  </IconWrapper>
);

LeaveIcon.defaultProps = {
  fill: '#000000',
  size: '24px',
  purposeLabel: 'Leave Icon',
};

export default LeaveIcon;