// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { IconProps } from '../../IconType';

/**
 *  Icon from Union's Figma UI-kit.
 */
const TeamSettingsIcon24 = ({ fill, purposeLabel, ...props }:IconProps) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Team Settings Icon'}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.5168 13.2376C11.9267 13.3969 12.3187 13.6054 12.6855 13.8613C12.951 14.0463 13.016 14.4115 12.8309 14.6769C12.6457 14.9423 12.2806 15.0074 12.0152 14.8222C11.2743 14.3055 10.4032 14.0323 9.4961 14.0323C7.5466 14.0323 5.78055 15.2897 5.20147 17.0901C5.14357 17.2705 5.17424 17.4617 5.28582 17.6148C5.3974 17.7679 5.56997 17.8557 5.75937 17.8557H10.8565C11.18 17.8557 11.4423 18.118 11.4423 18.4415C11.4423 18.7652 11.18 19.0275 10.8565 19.0275H5.75937C5.19129 19.0275 4.67356 18.7641 4.33893 18.305C4.00431 17.8457 3.91218 17.2722 4.08613 16.7313C4.61073 15.1003 5.89934 13.8214 7.48858 13.226C6.89417 12.6795 6.52098 11.896 6.52098 11.0267C6.52098 9.37918 7.86143 8.03885 9.50892 8.03885C10.7635 8.03885 11.8398 8.81613 12.2819 9.91442C12.6025 9.68142 12.9472 9.48298 13.3138 9.32162C13.3944 9.28614 13.4758 9.25284 13.5576 9.22137C12.96 8.67468 12.5847 7.88893 12.5847 7.01724C12.5847 5.36963 13.9251 4.0293 15.5726 4.0293C17.2202 4.0293 18.5605 5.36963 18.5605 7.01724C18.5605 7.89248 18.1822 8.68109 17.5804 9.228C17.9904 9.38742 18.3824 9.59582 18.7492 9.85171C19.0146 10.0368 19.0796 10.4019 18.8946 10.6673C18.7094 10.9328 18.3443 10.9978 18.0788 10.8127C17.3379 10.296 16.4669 10.0228 15.5598 10.0228C14.3977 10.0228 13.3137 10.4645 12.4868 11.2703C12.4238 12.0476 12.0621 12.7419 11.5168 13.2376ZM17.3887 7.01724C17.3887 6.01576 16.574 5.20106 15.5726 5.20106C14.5712 5.20106 13.7564 6.01576 13.7564 7.01724C13.7564 8.01859 14.5712 8.83341 15.5726 8.83341C16.574 8.83341 17.3887 8.01859 17.3887 7.01724ZM11.3251 11.0267C11.3251 10.0253 10.5104 9.2105 9.50892 9.2105C8.50744 9.2105 7.69274 10.0253 7.69274 11.0267C7.69274 12.0281 8.50744 12.8429 9.50892 12.8429C10.5104 12.8429 11.3251 12.0281 11.3251 11.0267Z" fill={fill} />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.0851 16C20.0851 16.136 20.0727 16.264 20.0563 16.392L20.924 17.052C21.0021 17.112 21.0227 17.22 20.9733 17.308L20.1509 18.692C20.1139 18.756 20.0439 18.792 19.974 18.792C19.9494 18.792 19.9247 18.788 19.9 18.78L18.8761 18.38C18.6622 18.536 18.432 18.672 18.1811 18.772L18.0248 19.832C18.0125 19.928 17.9262 20 17.8234 20H16.1785C16.0757 20 15.9893 19.928 15.977 19.832L15.8207 18.772C15.5699 18.672 15.3396 18.54 15.1257 18.38L14.1018 18.78C14.0561 18.7967 14.0057 18.797 13.9597 18.7809C13.9138 18.7648 13.8752 18.7333 13.851 18.692L13.0285 17.308C12.9792 17.22 12.9997 17.112 13.0779 17.052L13.9455 16.392C13.9291 16.264 13.9167 16.132 13.9167 16C13.9167 15.868 13.9291 15.736 13.9455 15.608L13.0779 14.948C12.9997 14.888 12.9751 14.78 13.0285 14.692L13.851 13.308C13.888 13.244 13.9579 13.208 14.0278 13.208C14.053 13.2081 14.078 13.2121 14.1018 13.22L15.1257 13.62C15.3396 13.464 15.5699 13.328 15.8207 13.228L15.977 12.168C15.9893 12.072 16.0757 12 16.1785 12H17.8234C17.8722 11.9994 17.9196 12.0161 17.9567 12.047C17.9938 12.0779 18.018 12.121 18.0248 12.168L18.1811 13.228C18.432 13.328 18.6622 13.46 18.8761 13.62L19.9 13.22C19.9458 13.2033 19.9961 13.203 20.0421 13.2191C20.0881 13.2352 20.1266 13.2667 20.1509 13.308L20.9733 14.692C21.0227 14.78 21.0021 14.888 20.924 14.948L20.0563 15.608C20.0727 15.736 20.0851 15.864 20.0851 16ZM17.0009 16.8C16.5486 16.8 16.1785 16.44 16.1785 16C16.1785 15.56 16.5486 15.2 17.0009 15.2C17.4533 15.2 17.8234 15.56 17.8234 16C17.8234 16.44 17.4533 16.8 17.0009 16.8ZM19.2626 16C19.2626 15.916 19.2585 15.832 19.2421 15.708L19.1845 15.256L19.5505 14.976L19.9905 14.636L19.7026 14.152L19.1804 14.356L18.7445 14.528L18.3703 14.248C18.2058 14.128 18.0413 14.036 17.8645 13.964L17.4286 13.792L17.3628 13.34L17.2847 12.8H16.7131L16.6308 13.34L16.565 13.792L16.1291 13.964C15.9605 14.032 15.7919 14.128 15.6151 14.256L15.245 14.528L14.8173 14.36L14.2951 14.156L14.0072 14.64L14.4513 14.976L14.8173 15.256L14.7598 15.708C14.7474 15.828 14.7392 15.92 14.7392 16C14.7392 16.08 14.7474 16.172 14.7598 16.296L14.8173 16.748L14.4513 17.028L14.0072 17.364L14.2951 17.848L14.8173 17.644L15.2532 17.472L15.6274 17.752C15.7919 17.872 15.9564 17.964 16.1332 18.036L16.5691 18.208L16.6349 18.66L16.7131 19.2H17.2888L17.371 18.66L17.4368 18.208L17.8727 18.036C18.0413 17.968 18.2099 17.872 18.3867 17.744L18.7568 17.472L19.1845 17.64L19.7067 17.844L19.9946 17.36L19.5505 17.024L19.1845 16.744L19.2421 16.292C19.2544 16.172 19.2626 16.084 19.2626 16ZM17.0009 14.4C16.0921 14.4 15.356 15.116 15.356 16C15.356 16.884 16.0921 17.6 17.0009 17.6C17.9097 17.6 18.6458 16.884 18.6458 16C18.6458 15.116 17.9097 14.4 17.0009 14.4Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

TeamSettingsIcon24.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Team Settings Button',
};

export default TeamSettingsIcon24;
