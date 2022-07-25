// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Close } from '@radix-ui/react-dialog';
import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface ModalCloseProps {
  /**
   *  Button which closes modal
   */
   children: ReactNode;
}

const StyledClose = styled(Close, {
  backgroundColor: GrayShades.white,
  cursor: 'pointer',
  border: 0,
  position: 'absolute',
  top: 10,
  padding: 0,
  right: 10,
});

/**
 *  The button that closes the dialog.
 */
const ModalClose = ({
  children, ...props
}: ModalCloseProps) => (
  <StyledClose {...props}>
    {children}
  </StyledClose>
);

export default ModalClose;
