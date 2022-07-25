// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { ReactNode } from 'react';

export interface AlertTriggerProps {
  /**
   *  Trigger button
   */
   children: ReactNode;
}

/**
 *  A button that opens the dialog.
 */
const AlertTrigger = ({
  children, ...props
}: AlertTriggerProps) => (
  <AlertDialogTrigger asChild {...props}>
    {children}
  </AlertDialogTrigger>
);

export default AlertTrigger;
