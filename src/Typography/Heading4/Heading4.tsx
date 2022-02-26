// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface Heading4Props {
  /**
   *  The progress value.
   */
   weight?: 'regular' | 'bold' | 'semibold';
     /**
   * Button contents
   */
  children: ReactNode;
}

const StyledHeading = styled('h4', {
  fontSize: '16px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: '22px',
  margin: 0,
  variants: {
    weight: {
      regular: {
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
      semibold: {
        fontWeight: '600',
      },
    },
  },
});

/**
 * Primary UI component for user interaction
 */
const Heading4 = ({ weight, children }: Heading4Props) => (
  <StyledHeading weight={weight}>
    {children}
  </StyledHeading>
);

Heading4.defaultProps = {
  weight: 'regular',
};

export default Heading4;
