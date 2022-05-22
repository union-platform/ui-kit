// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import BrandColors from '../Colors/BrandColors/BrandColors';

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
  backgroundColor: BrandColors.darkGreen,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'center',
  transition: 'background 0.8s',

  '&:hover': {
    background: `${BrandColors.darkGreen} radial-gradient(circle, transparent 1%, ${BrandColors.darkGreen} 1%) center/15000%`,
  },

  '&:active': {
    backgroundColor: 'rgb(15 210 77)',
    backgroundSize: '100%',
    transition: 'background 0s',
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
