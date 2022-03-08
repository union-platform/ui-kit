// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface TextProps {
  /**
   *  The font weight of the text.
   */
   weight?: 'regular' | 'bold' | 'light';
  /**
   *  Heading contents
   */
  children: ReactNode;
}

const StyledHeading = styled('p', {
  fontSize: '14px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: '125%',
  margin: 0,
  variants: {
    weight: {
      regular: {
        fontWeight: 'normal',
      },
      bold: {
        fontWeight: 'bold',
      },
      light: {
        fontWeight: 'light',
      },
    },
  },
});

/**
 *  Regular text. Used primary for paragraphs.
 */
const Text = ({ weight, children }: TextProps) => (
  <StyledHeading weight={weight}>
    {children}
  </StyledHeading>
);

Text.defaultProps = {
  weight: 'regular',
};

export default Text;
