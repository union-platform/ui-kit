// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import Button from '../Button/Button';

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
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    variants: {
      disabled: {
        true: {
          opacity: '0.4',
          cursor: 'auto',
        },
      },
    },
  });

/**
 *  Text button with icon.
 */
const CellButton = ({
  // eslint-disable-next-line no-unused-vars
  label, children, iconRight, disabled, onClick, ...props
}: CellButtonProps) => (
  iconRight
    ? (
      <CellButtonContainer {...props} onClick={disabled ? undefined : onClick} disabled={disabled}>
        <Button disabled={disabled} variant="text">{label}</Button>
        {children}
      </CellButtonContainer>
    )
    : (
      <CellButtonContainer {...props} onClick={disabled ? undefined : onClick} disabled={disabled}>
        {children}
        <Button disabled={disabled} variant="text">{label}</Button>
      </CellButtonContainer>
    ));

CellButton.defaultProps = {
  iconRight: false,
  disabled: false,
  onClick: undefined,
};

export default CellButton;
