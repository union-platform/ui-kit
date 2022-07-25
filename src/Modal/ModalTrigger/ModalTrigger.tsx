// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Trigger } from '@radix-ui/react-dialog';
import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface ModalTriggerProps {
  /**
   *  Button that will open the modal
   */
   children: ReactNode;
}

const StyledTrigger = styled(Trigger, {
  backgroundColor: GrayShades.white,
  cursor: 'pointer',
  border: 0,
});

/**
 *  The button that opens the dialog.
 */
const ModalTrigger = ({
  children, ...props
}: ModalTriggerProps) => (
  <StyledTrigger {...props}>
    {children}
  </StyledTrigger>
);

export default ModalTrigger;
