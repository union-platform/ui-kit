// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import Heading3 from '../../Typography/Heading3/Heading3';

export interface ModalTitleProps {
  /**
   *  Text value of the title
   */
   children: ReactNode;
}

/**
 *  An accessible title to be announced when the dialog is opened.
 */
const ModalTitle = ({
  children, ...props
}: ModalTitleProps) => (
  <DialogPrimitive.Title {...props}>
    <Heading3 weight="bold">
      {children}
    </Heading3>
  </DialogPrimitive.Title>
);

export default ModalTitle;
