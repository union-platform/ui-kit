// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface IconButtontProps {
  /**
   * Button contents
   */
  children: ReactNode;
}

const StyledButton = styled('button', {
  cursor: 'pointer',
  width: 56,
  height: 36,
  borderRadius: 5,
  border: 0,
  backgroundColor: '#0DBC44',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    opacity: 0.8,
  },
});

/**
 * Primary UI component for user interaction
 */
const IconButton = ({ children }: IconButtontProps) => (
  <StyledButton>
    {children}
  </StyledButton>
);

export default IconButton;
