// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface Heading3Props {
  /**
   *  The font weight of the heading.
   */
   weight?: 'regular' | 'bold';
  /**
   *  Heading contents
   */
  children: ReactNode;
}

const StyledHeading = styled('h3', {
  fontSize: '18px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: '25px',
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
 *  Primary heading for mobile UI. Used in headers, modals, buttons and so on.
 */
const Heading3 = ({ weight, children }: Heading3Props) => (
  <StyledHeading weight={weight}>
    {children}
  </StyledHeading>
);

Heading3.defaultProps = {
  weight: 'regular',
};

export default Heading3;
