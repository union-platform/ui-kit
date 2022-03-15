// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface Heading4Props {
  /**
   *  The font weight of the heading.
   */
   weight?: 'regular' | 'bold' | 'semibold';
  /**
   *  Heading contents
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
 *  One of the smallest headings. Used in tabs, inputs, cells and so on.
 */
const Heading4 = ({ weight, children, ...props }: Heading4Props) => (
  <StyledHeading {...props} weight={weight}>
    {children}
  </StyledHeading>
);

Heading4.defaultProps = {
  weight: 'regular',
};

export default Heading4;
