// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { keyframes, styled } from '@stitches/react';
import { ReactNode } from 'react';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';

export interface ButtonProps {
  /**
   *  Variant of button
   */
  variant: 'special' | 'primary' | 'secondary' | 'text';
  /**
   *  When true, the button takes full width of a container.
   */
  fullWidth?: boolean;
  /**
   *  Button contents.
   */
  children: ReactNode;
  /**
   *  When true, prevents the user from interacting with the button.
   */
  disabled?: boolean;
  /**
   *  Optional click handler.
   */
  onClick?: () => void;
}

const specialButtonAnimationGradient = keyframes({
  '0%': { transform: 0 },
  '50%': { transform: 'translate(-10px, 10px)' },
  '100%': { transform: 0 },
});

const StyledButton = styled('button', {
  cursor: 'pointer',
  fontFamily: 'Open Sans, sans-serif',

  variants: {
    variant: {
      primary: {
        backgroundColor: BrandColors.darkGreen,
        fontWeight: 600,
        fontSize: '14px',
        border: 0,
        width: '94px',
        height: '36px',
        borderRadius: '5px',
        color: GrayShades.white,
        '&:hover': {
          opacity: 0.8,
        },
      },
      secondary: {
        backgroundColor: GrayShades.white,
        fontSize: '18px',
        padding: '0 32px 0 32px',
        borderRadius: '5px',
        border: `3px solid ${GrayShades.dark}`,
        color: '#4E4E4E',
        height: '48px',
        '&:hover': {
          opacity: 0.8,
        },
      },
      text: {
        backgroundColor: 'transparent',
        fontSize: '14px',
        color: BrandColors.darkGreen,
        fontWeight: 600,
        border: 0,
        height: '48px',
        '&:hover': {
          opacity: 0.8,
        },
      },
      special: {
        backgroundColor: 'transparent',
        color: GrayShades.white,
        width: '154px',
        height: '48px',
        fontSize: '16px',
        border: 0,
        lineHeight: '21,79px',
        position: 'relative',
        '&:after': {
          top: '4px',
          left: 0,
          position: 'absolute',
          backgroundColor: 'transparent',
          width: '148px',
          display: 'block',
          zIndex: 2,
          content: '',
          boxSizing: 'border-box',
          height: '41px',
          borderRadius: '5px',
          border: `3px solid ${GrayShades.dark}`,
        },
        '&:before': {
          position: 'absolute',
          right: '0',
          top: '0',
          display: 'block',
          content: '',
          zIndex: '-1',
          animation: `${specialButtonAnimationGradient} 3000ms infinite`,
          width: '149px',
          height: '40px',
          borderRadius: '5px',
          background: BrandColors.unionGradient,
        },
        '&:hover': {
          opacity: 0.8,
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        cursor: 'initial',
        opacity: 0.4,
        '&:hover': {
          opacity: '0.4 !important',
        },
      },
    },
  },
});

/**
 *  Main UI-component for user interaction
 */
const Button = ({
  fullWidth, children, variant, onClick, disabled, ...props
}: ButtonProps) => (
  <StyledButton
    disabled={disabled}
    type="button"
    fullWidth={fullWidth}
    role="button"
    variant={variant}
    onClick={disabled ? undefined : onClick}
    {...props}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
