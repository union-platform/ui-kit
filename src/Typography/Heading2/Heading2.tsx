// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface Heading2Props {
  /**
   *  The progress value.
   */
   weight?: 'regular' | 'bold';
     /**
   * Button contents
   */
  children: ReactNode;
}

const StyledHeading = styled('h2', {
  fontSize: '24px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: '33px',
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
const Heading2 = ({ weight, children }: Heading2Props) => (
  <StyledHeading weight={weight}>
    {children}
  </StyledHeading>
);

Heading2.defaultProps = {
  weight: 'regular',
};

export default Heading2;
