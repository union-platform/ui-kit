// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface IconButtonProps {
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   *  When true, prevents the user from interacting with the IconButton.
   */
  disabled?: boolean;
  /**
   *  Optional click handler
   */
  onClick?: () => void;
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

  variants: {
    disabled: {
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
 *  Button without text, only icon.
 */
const IconButton = ({
  children, disabled, onClick, ...props
}: IconButtonProps) => (
  <StyledButton disabled={disabled} {...props} onClick={disabled ? undefined : onClick}>
    {children}
  </StyledButton>
);

IconButton.defaultProps = {
  disabled: undefined,
  onClick: undefined,
};

export default IconButton;
