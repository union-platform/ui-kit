// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export interface ModalProps {
  /**
   *  Children of the modal, like `ModalTrigger` and `ModalContent`.
   */
   children: ReactNode;
}

/**
 *  Contains all the parts of a modal, like `ModalTrigger` and `ModalContent`.
 */
const Modal = ({
  children, ...props
}: ModalProps) => (
  <DialogPrimitive.Root {...props}>
    {children}
  </DialogPrimitive.Root>
);

export default Modal;
