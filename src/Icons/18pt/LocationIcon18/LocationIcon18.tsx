// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

export interface LocationIcon18Props {
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
const LocationIcon18 = ({ fill, purposeLabel }:LocationIcon18Props) => (
  <AccessibleIcon.Root
    label={purposeLabel || 'Location Icon'}
  >
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9264 13.9052V7.09986L9.00006 4.09418L4.07374 7.09986V13.9052H6.5369V12.1832C6.5369 11.5189 6.79641 10.8818 7.25834 10.4121C7.72027 9.94237 8.34679 9.67848 9.00006 9.67848C9.65333 9.67848 10.2798 9.94237 10.7418 10.4121C11.2037 10.8818 11.4632 11.5189 11.4632 12.1832V13.9052H13.9264ZM10.2316 15.1576V12.1832C10.2316 11.8511 10.1019 11.5325 9.87092 11.2977C9.63995 11.0628 9.32669 10.9308 9.00006 10.9308C8.67342 10.9308 8.36017 11.0628 8.1292 11.2977C7.89823 11.5325 7.76848 11.8511 7.76848 12.1832V15.1576H4.07374C3.74711 15.1576 3.43385 15.0256 3.20288 14.7908C2.97192 14.5559 2.84216 14.2374 2.84216 13.9052V7.09986C2.84216 6.88359 2.89723 6.67101 3.00202 6.48281C3.1068 6.29462 3.25773 6.13722 3.44009 6.02595L8.36641 3.02027C8.55782 2.90349 8.77684 2.8418 9.00006 2.8418C9.22328 2.8418 9.4423 2.90349 9.63371 3.02027L14.56 6.02595C14.7424 6.13722 14.8933 6.29462 14.9981 6.48281C15.1029 6.67101 15.158 6.88359 15.158 7.09986V13.9052C15.158 14.2374 15.0282 14.5559 14.7972 14.7908C14.5663 15.0256 14.253 15.1576 13.9264 15.1576H10.2316Z" fill={fill} />
    </svg>
  </AccessibleIcon.Root>
);

LocationIcon18.defaultProps = {
  fill: '#000000',
  purposeLabel: 'Location Icon',
};

export default LocationIcon18;
