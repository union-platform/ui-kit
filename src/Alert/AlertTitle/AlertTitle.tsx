// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { AlertDialogTitle } from '@radix-ui/react-alert-dialog';
import { ReactNode } from 'react';
import Heading3 from '../../Typography/Heading3/Heading3';

export interface AlertTitleProps {
  /**
   *  Text value of title
   */
   children: ReactNode;
}

/**
 *  An accessible name to be announced when the dialog is opened.
 *  Alternatively, you can provide `aria-label` or `aria-labelledby`
 *  to `AlertContent` and exclude this component.
 */
const AlertTitle = ({
  children, ...props
}: AlertTitleProps) => (
  <AlertDialogTitle {...props}>
    <Heading3 weight="bold">
      {children}
    </Heading3>
  </AlertDialogTitle>
);

export default AlertTitle;
