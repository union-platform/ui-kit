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
   *  Negative (dangerous action, error) state of the button.
   *  `Special` variant of the button could't be negative.
   */
  negative?: boolean;
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
  userSelect: 'none',
  whiteSpace: 'nowrap',
  textAlign: 'center',

  compoundVariants: [
    {
      variant: 'primary',
      negative: true,
      css: {
        backgroundColor: BrandColors.red,
        backgroundPosition: 'center',
        transition: 'background 0.8s',

        '&:hover': {
          background: `${BrandColors.red} radial-gradient(circle, transparent 1%, ${BrandColors.red} 1%) center/15000%`,
        },

        '&:active': {
          backgroundColor: 'hsla(11, 100%, 51%, 1)',
          backgroundSize: '100%',
          transition: 'background 0s',
        },
      },
    },
    {
      variant: 'secondary',
      negative: true,
      css: {
        borderColor: BrandColors.red,
        color: BrandColors.red,
      },
    },
    {
      variant: 'text',
      negative: true,
      css: {
        color: BrandColors.red,
        backgroundPosition: 'center',
        transition: 'background 0.8s',

        '&:hover': {
          background: `${BrandColors.transparentRed1} radial-gradient(circle, transparent 1%, ${BrandColors.transparentRed1} 1%) center/15000%`,
        },

        '&:active': {
          backgroundColor: BrandColors.transparentRed2,
          backgroundSize: '100%',
          transition: 'background 0s',
        },
      },
    },
  ],

  variants: {
    variant: {
      primary: {
        backgroundColor: BrandColors.darkGreen,
        fontWeight: 600,
        fontSize: '14px',
        padding: '0 20px 0 20px',
        border: 0,
        minWidth: '94px',
        height: '36px',
        borderRadius: '5px',
        color: GrayShades.white,
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
      },
      secondary: {
        backgroundColor: GrayShades.white,
        fontSize: '16px',
        padding: '0 32px 0 32px',
        borderRadius: '5px',
        border: `3px solid ${GrayShades.dark}`,
        color: GrayShades.dark,
        height: '41px',
        minWidth: '148px',
      },
      text: {
        backgroundColor: 'transparent',
        fontSize: '14px',
        color: BrandColors.darkGreen,
        fontWeight: 600,
        border: 0,
        borderRadius: 4,
        height: '32px',
        backgroundPosition: 'center',
        transition: 'background 0.8s',

        '&:hover': {
          background: `${BrandColors.transparentGreen1} radial-gradient(circle, transparent 1%, ${BrandColors.transparentGreen1} 1%) center/15000%`,
        },

        '&:active': {
          backgroundColor: BrandColors.transparentGreen2,
          backgroundSize: '100%',
          transition: 'background 0s',
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

        '&:hover': {
          '&:before': {
            animationFillMode: 'forwards',
          },
        },

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
    negative: {
      true: {
      },
    },
  },
});

/**
 *  Main UI-component for user interaction
 */
const Button = ({
  fullWidth, children, variant, negative, onClick, disabled, ...props
}: ButtonProps) => (
  <StyledButton
    disabled={disabled}
    type="button"
    fullWidth={fullWidth}
    role="button"
    variant={variant}
    onClick={disabled ? undefined : onClick}
    negative={negative}
    {...props}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  fullWidth: false,
  negative: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
