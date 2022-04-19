// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface AlertCancelProps {
  /**
   *  Cancel button
   */
   children: ReactNode;
}

const StyledCancel = styled(AlertDialogPrimitive.AlertDialogCancel, {
  backgroundColor: 'white',
  border: 0,
});

/**
 *  A button that closes the dialog.
 *  This button should be distinguished visually from `AlertAction` buttons.
 */
const AlertCancel = ({
  children, ...props
}: AlertCancelProps) => (
  <StyledCancel {...props}>
    {children}
  </StyledCancel>
);

export default AlertCancel;
