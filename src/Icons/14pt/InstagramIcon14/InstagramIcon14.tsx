// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface InstagramIcon14Props {
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
const InstagramIcon14 = ({ fill, purposeLabel }:InstagramIcon14Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Instagram Icon'}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.59264 1.03706H11.4076C12.2667 1.03706 12.9632 1.73351 12.9632 2.59264V11.4076C12.9632 12.2667 12.2667 12.9632 11.4076 12.9632H2.59264C1.73351 12.9632 1.03706 12.2667 1.03706 11.4076V2.59264C1.03706 1.73351 1.73351 1.03706 2.59264 1.03706ZM0 2.59264C0 1.16077 1.16074 0 2.59264 0H11.4076C12.8395 0 14.0003 1.16077 14.0003 2.59264V11.4076C14.0003 12.8395 12.8395 14.0003 11.4076 14.0003H2.59264C1.16074 14.0003 0 12.8395 0 11.4076V2.59264ZM11.0219 4.40334C11.5213 4.40334 11.9261 3.99799 11.9261 3.49801C11.9261 2.99799 11.5213 2.59264 11.0219 2.59264C10.5225 2.59264 10.1177 2.99799 10.1177 3.49801C10.1177 3.99799 10.5225 4.40334 11.0219 4.40334ZM6.98981 3.64074C5.96111 3.64074 4.97457 4.04989 4.24722 4.77819C3.51981 5.50648 3.11117 6.49423 3.11117 7.52416C3.11117 8.55413 3.51981 9.54191 4.24722 10.2702C4.97457 10.9985 5.96111 11.4076 6.98981 11.4076C8.01845 11.4076 9.005 10.9985 9.7324 10.2702C10.4597 9.54191 10.8684 8.55413 10.8684 7.52416C10.8684 6.49423 10.4597 5.50648 9.7324 4.77819C9.005 4.04989 8.01845 3.64074 6.98981 3.64074ZM6.98981 10.0462C6.32152 10.0462 5.68058 9.78041 5.20807 9.3073C4.73549 8.83416 4.47003 8.19245 4.47003 7.52334C4.47003 6.85423 4.73549 6.21253 5.20807 5.73941C5.68058 5.26627 6.32152 5.00045 6.98981 5.00045C7.6581 5.00045 8.29898 5.26627 8.77156 5.73941C9.24407 6.21253 9.50954 6.85423 9.50954 7.52334C9.50954 8.19245 9.24407 8.83416 8.77156 9.3073C8.29898 9.78041 7.6581 10.0462 6.98981 10.0462Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

InstagramIcon14.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Instagram Icon',
};

export default InstagramIcon14;
