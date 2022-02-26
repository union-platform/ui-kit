// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import Button from '../Button/Button';

export interface CellButtonProps {
  /**
   *  Variant of button
   */
   label: string;
  /**
   *  Variant of button
   */
   disabled?: boolean;
  /**
   *  Variant of button
   */
   iconRight?: boolean;
    /**
   * Button contents
   */
     children: ReactNode;
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
        },
      },
    },
  });

/**
 * Primary UI component for user interaction
 */
const CellButton = ({
  // eslint-disable-next-line no-unused-vars
  label, children, iconRight, disabled,
}: CellButtonProps) => (
  iconRight
    ? (
      <CellButtonContainer disabled={disabled}>
        <Button variant="text" label={label} />
        {children}
      </CellButtonContainer>
    )
    : (
      <CellButtonContainer disabled={disabled}>
        {children}
        <Button variant="text" label={label} />
      </CellButtonContainer>
    ));

CellButton.defaultProps = {
  iconRight: false,
  disabled: false,
};

export default CellButton;
