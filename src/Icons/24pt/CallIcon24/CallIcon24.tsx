// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const CallIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Call Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.449 7.22715L16.577 5.35684C16.3484 5.12832 16.0426 5 15.7191 5C15.3957 5 15.0898 5.12656 14.8613 5.35684L12.8451 7.36953C12.6166 7.59805 12.4883 7.90566 12.4883 8.2291C12.4883 8.5543 12.6148 8.8584 12.8451 9.08867L14.4201 10.6654C14.0613 11.5014 13.5458 12.261 12.9014 12.9031C12.2562 13.5518 11.5021 14.0633 10.6654 14.4254L9.09043 12.8486C8.86191 12.6201 8.55605 12.4918 8.23262 12.4918C8.07308 12.4912 7.91504 12.5225 7.76774 12.5837C7.62044 12.645 7.48685 12.7351 7.3748 12.8486L5.35684 14.8613C5.12832 15.0898 5 15.3975 5 15.7209C5 16.0461 5.12656 16.3502 5.35684 16.5805L7.22715 18.4508C7.61738 18.841 8.15527 19.0643 8.70723 19.0643C8.82148 19.0643 8.93223 19.0555 9.04473 19.0361C11.3721 18.6529 13.6818 17.4137 15.5469 15.5504C17.4102 13.6836 18.6477 11.3738 19.0344 9.04473C19.1451 8.38379 18.9236 7.70352 18.449 7.22715ZM17.7881 8.83555C17.4453 10.908 16.3309 12.9752 14.6521 14.6539C12.9734 16.3326 10.908 17.4471 8.83555 17.7898C8.57539 17.8338 8.3082 17.7459 8.11836 17.5578L6.28145 15.7209L8.2291 13.7715L10.335 15.8809L10.3508 15.8967L10.7305 15.7561C11.8817 15.3328 12.9271 14.6642 13.7943 13.7968C14.6615 12.9293 15.3297 11.8836 15.7525 10.7322L15.8932 10.3525L13.7697 8.23086L15.7174 6.28145L17.5543 8.11836C17.7441 8.3082 17.832 8.57539 17.7881 8.83555Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

CallIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Call Icon',
};

export default CallIcon24;
