// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface Heading5Props {
  /**
   *  The progress value.
   */
   weight?: 'regular' | 'bold';
     /**
   * Button contents
   */
  children: ReactNode;
}

const StyledHeading = styled('h5', {
  fontSize: '12px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: '146.3%',
  margin: 0,
  variants: {
    weight: {
      regular: {
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
  },
});

/**
 * Primary UI component for user interaction
 */
const Heading5 = ({ weight, children }: Heading5Props) => (
  <StyledHeading weight={weight}>
    {children}
  </StyledHeading>
);

Heading5.defaultProps = {
  weight: 'regular',
};

export default Heading5;
