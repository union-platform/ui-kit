// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface Heading1Props {
  /**
   *  The font weight of the heading.
   */
   weight?: 'regular' | 'bold';
  /**
   *  Heading contents
   */
  children: ReactNode;
}

const StyledHeading = styled('h1', {
  fontSize: '30px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: '41px',
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
 *  Biggest heading. Should be used only once on page.
 */
const Heading1 = ({ weight, children }: Heading1Props) => (
  <StyledHeading weight={weight}>
    {children}
  </StyledHeading>
);

Heading1.defaultProps = {
  weight: 'regular',
};

export default Heading1;
