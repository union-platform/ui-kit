// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface AlertActionProps {
  /**
   *  Action button
   */
   children: ReactNode;
}

const StyledAction = styled(AlertDialogPrimitive.AlertDialogAction, {
  backgroundColor: 'white',
  border: 0,
});

/**
 *  A button that closes the dialog.
 *  These buttons should be distinguished visually from the `AlertCancel` button.
 */
const AlertAction = ({
  children, ...props
}: AlertActionProps) => (
  <StyledAction {...props}>
    {children}
  </StyledAction>
);

export default AlertAction;
