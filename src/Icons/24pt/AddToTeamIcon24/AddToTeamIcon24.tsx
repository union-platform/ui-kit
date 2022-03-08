// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const AddToTeamIcon24 = ({ fill, purposeLabel }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Add To Team Icon'}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6851 13.8613C12.3183 13.6054 11.9263 13.3969 11.5164 13.2376C12.0617 12.7419 12.4235 12.0476 12.4864 11.2703C13.3134 10.4645 14.3974 10.0228 15.5594 10.0228C16.4666 10.0228 17.3376 10.296 18.0785 10.8127C18.344 10.9978 18.709 10.9328 18.8942 10.6673C19.0792 10.4019 19.0142 10.0368 18.7489 9.85171C18.3821 9.59582 17.99 9.38742 17.5801 9.228C18.1818 8.68109 18.5601 7.89248 18.5601 7.01724C18.5601 5.36963 17.2198 4.0293 15.5722 4.0293C13.9247 4.0293 12.5844 5.36963 12.5844 7.01724C12.5844 7.88893 12.9596 8.67468 13.5572 9.22137C13.4754 9.25284 13.394 9.28614 13.3135 9.32162C12.9468 9.48298 12.6021 9.68142 12.2816 9.91442C11.8395 8.81613 10.7632 8.03885 9.50855 8.03885C7.86106 8.03885 6.52061 9.37918 6.52061 11.0267C6.52061 11.896 6.8938 12.6795 7.48821 13.226C5.89897 13.8214 4.61036 15.1003 4.08577 16.7313C3.91182 17.2722 4.00394 17.8457 4.33857 18.305C4.67319 18.7641 5.19092 19.0275 5.75901 19.0275H10.8561C11.1796 19.0275 11.4419 18.7652 11.4419 18.4415C11.4419 18.118 11.1796 17.8557 10.8561 17.8557H5.75901C5.56961 17.8557 5.39703 17.7679 5.28545 17.6148C5.17387 17.4617 5.1432 17.2705 5.20111 17.0901C5.78018 15.2897 7.54623 14.0323 9.49573 14.0323C10.4028 14.0323 11.2739 14.3055 12.0148 14.8222C12.2802 15.0074 12.6454 14.9423 12.8305 14.6769C13.0156 14.4115 12.9506 14.0463 12.6851 13.8613ZM15.5722 5.20106C16.5737 5.20106 17.3884 6.01576 17.3884 7.01724C17.3884 8.01859 16.5737 8.83341 15.5722 8.83341C14.5708 8.83341 13.756 8.01859 13.756 7.01724C13.756 6.01576 14.5708 5.20106 15.5722 5.20106ZM9.50855 9.2105C10.51 9.2105 11.3247 10.0253 11.3247 11.0267C11.3247 12.0281 10.51 12.8429 9.50855 12.8429C8.50708 12.8429 7.69237 12.0281 7.69237 11.0267C7.69237 10.0253 8.50708 9.2105 9.50855 9.2105ZM18.9996 16.2446C18.9996 16.5681 18.7373 16.8304 18.4137 16.8304H16.8026V18.4415C16.8026 18.7652 16.5403 19.0275 16.2167 19.0275C15.8931 19.0275 15.6308 18.7652 15.6308 18.4415V16.8304H14.0197C13.6962 16.8304 13.4339 16.5681 13.4339 16.2446C13.4339 15.921 13.6962 15.6587 14.0197 15.6587H15.6308V14.0476C15.6308 13.724 15.8931 13.4617 16.2167 13.4617C16.5403 13.4617 16.8026 13.724 16.8026 14.0476V15.6587H18.4137C18.7373 15.6587 18.9996 15.921 18.9996 16.2446Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

AddToTeamIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Add To Team Icon',
};

export default AddToTeamIcon24;
