// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import Button from '../Button/Button';
import BrandColors from '../Colors/BrandColors/BrandColors';

export interface CellButtonProps {
  /**
   *  String, which will be placed near an icon.
   */
  label: string;
  /**
   *  When true, prevents the user from interacting with the cell button.
   */
  disabled?: boolean;
  /**
   *  Negative (dangerous action, error) state of the text button.
   */
  negative?: boolean;
  /**
   *  When true, icon from children will placed at right from the label.
   */
  iconRight?: boolean;
  /**
   *  Icon, which be placed near the label.
   */
  children: ReactNode;
  /**
   *  Optional click handler.
   */
  onClick?: () => void;
}

const CellButtonContainer = styled('div',
  {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 4,
    cursor: 'pointer',
    backgroundPosition: 'center',
    transition: 'background 0.8s',

    variants: {
      disabled: {
        true: {
          opacity: '0.4',
          cursor: 'auto',
        },
      },
      negative: {
        true: {
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
    },

    '&:hover': {
      background: `${BrandColors.transparentGreen1} radial-gradient(circle, transparent 1%, ${BrandColors.transparentGreen1} 1%) center/15000%`,
    },

    '&:active': {
      backgroundColor: BrandColors.transparentGreen2,
      backgroundSize: '100%',
      transition: 'background 0s',
    },
  });

const IconContainer = styled('div', {
  paddingLeft: 6,
  display: 'flex',
  alignItems: 'center',

  variants: {
    iconRightPadding: {
      true: {
        paddingLeft: 0,
        paddingRight: 6,
      },
    },
  },
});

/**
 *  Text button with icon.
 */
const CellButton = ({
  // eslint-disable-next-line no-unused-vars
  label, children, iconRight, negative, disabled, onClick, ...props
}: CellButtonProps) => (
  iconRight
    ? (
      <CellButtonContainer
        negative={negative}
        {...props}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        <Button
          negative={negative}
          css={{
            '&:hover': {
              background: 'transparent',
            },

            '&:active': {
              backgroundColor: 'transparent',
              transition: 'none',
            },
          }}
          disabled={disabled}
          variant="text"
        >
          {label}

        </Button>
        <IconContainer iconRightPadding={iconRight}>
          {children}
        </IconContainer>
      </CellButtonContainer>
    )
    : (
      <CellButtonContainer
        negative={negative}
        {...props}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
      >
        <IconContainer>
          {children}
        </IconContainer>
        <Button
          negative={negative}
          css={{
            '&:hover': {
              background: 'transparent',
            },

            '&:active': {
              backgroundColor: 'trasparent',
              transition: 'none',
            },
          }}
          disabled={disabled}
          variant="text"
        >
          {label}

        </Button>
      </CellButtonContainer>
    ));

CellButton.defaultProps = {
  iconRight: false,
  disabled: false,
  onClick: undefined,
  negative: undefined,
};

export default CellButton;
