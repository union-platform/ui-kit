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
   disabled?: boolean;
  /**
   * Button contents
   */
   pressed?: boolean;
  /**
   * Button contents
   */
   onPressedChange?: () => {};
  /**
   * Button contents
   */
   defaultPressed?: boolean;
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
  '&[data-state=on]': { backgroundColor: '#0DBC44', color: '#FFFFFF' },
  '&:focus': { boxShadow: '0 0 0 2px #A5D43D' },
  '&:hover': {
    opacity: 0.8,
  },

  variants: {
    disabledStyles: {
      true: {
        opacity: 0.4,
        cursor: 'auto',
        '&:hover': {
          opacity: 0.4,
        },
      },
    },
  },
});

/**
 * Primary UI component for user interaction
 */
const ToogleButton = ({
  children, onPressedChange, defaultPressed, disabled, pressed, ...props
}: ToogleButtonProps) => (
  <StyledToggle
    disabled={disabled}
    disabledStyles={disabled}
    pressed={pressed}
    defaultPressed={defaultPressed}
    onPressedChange={disabled ? undefined : onPressedChange}
    {...props}
  >
    {children}
  </StyledToggle>
);

ToogleButton.defaultProps = {
  disabled: undefined,
  onPressedChange: undefined,
  pressed: undefined,
  defaultPressed: undefined,
};

export default ToogleButton;
