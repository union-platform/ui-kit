// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { AlertDialogDescription } from '@radix-ui/react-alert-dialog';
import { ReactNode } from 'react';
import Text from '../../Typography/Text/Text';

export interface AlertDescriptionProps {
  /**
   *  Text of the description
   */
   children: ReactNode;
}

/**
 *  An accessible description to be announced when the dialog is opened.
 *  Alternatively, you can provide `aria-describedby`
 *  to `AlertContent` and exclude this component.
 */
const AlertDescription = ({
  children, ...props
}: AlertDescriptionProps) => (
  <AlertDialogDescription {...props}>
    <Text weight="regular">
      {children}
    </Text>
  </AlertDialogDescription>
);

export default AlertDescription;
