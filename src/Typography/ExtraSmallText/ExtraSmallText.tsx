// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface ExtraSmallTextProps {
  /**
   *  Text contents
   */
  children: ReactNode;
}

const StyledHeading = styled('span', {
  fontSize: '10px',
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 'normal',
  lineHeight: '12px',
  margin: 0,
});

/**
 *  Very small text. Use rarely.
 */
const ExtraSmallText = ({ children }: ExtraSmallTextProps) => (
  <StyledHeading>
    {children}
  </StyledHeading>
);

export default ExtraSmallText;
