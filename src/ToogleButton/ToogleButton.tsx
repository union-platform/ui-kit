// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { ReactNode } from 'react';

export interface ToogleButtonProps {
  /**
   * Button contents
   */
   children: ReactNode;
  /**
   * Button contents
   */
   ariaLabel: string;
}

const StyledToggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  backgroundColor: '#F5FDF5',
  color: '#3E3E3E',
  height: 35,
  border: 0,
  borderRadius: 4,
  display: 'flex',
  fontSize: 14,
  cursor: 'pointer',
  fontWeight: 600,
  padding: '0px 10px 0px 10px',
  fontFamily: 'Open Sans, sans-serif',
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  // '&:hover': { backgroundColor: '#0DBC44', color: '#FFFFFF' },
  '&[data-state=on]': { backgroundColor: '#0DBC44', color: '#FFFFFF' },
  // '&:focus': { boxShadow: '0 0 0 2px black' },
});

/**
 * Primary UI component for user interaction
 */
const ToogleButton = ({ children, ariaLabel }: ToogleButtonProps) => (
  <StyledToggle aria-label={ariaLabel}>
    {children}
  </StyledToggle>
);

export default ToogleButton;
