// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { ReactNode } from 'react';

export interface AlertProps {
  /**
   *  Children of the Alert, like `AlertTrigger` and `AlertContent`
   */
   children: ReactNode;
  /**
   *  The controlled open state of the dialog. Must be used in conjunction with `onOpenChange`.
   */
   open?: boolean;
  /**
   *  The open state of the dialog when it is initially rendered.
   *  Use when you do not need to control its open state.
   */
   defaultOpen?: boolean;
  /**
   *  The controlled open state of the dialog. Must be used in conjunction with `onOpenChange`.
   */
   // eslint-disable-next-line no-unused-vars
   onOpenChange?: (open: boolean) => void;
  /**
   *  The `allowPinchZoom` prop from react-remove-scroll.
   *  See their docs for information on functionality and limitations.
   */
   allowPinchZoom?: boolean;
}

/**
 *  Wrapper of other `Alert` components, like `AlertTrigger` and `AlertContent`
 */
const Alert = ({
  children, open, defaultOpen, onOpenChange, allowPinchZoom, ...props
}: AlertProps) => (
  <AlertDialogPrimitive.Root
    open={open}
    defaultOpen={defaultOpen}
    onOpenChange={onOpenChange}
    allowPinchZoom={allowPinchZoom}
    {...props}
  >
    {children}
  </AlertDialogPrimitive.Root>
);

Alert.defaultProps = {
  open: undefined,
  defaultOpen: undefined,
  onOpenChange: undefined,
  allowPinchZoom: false,
};

export default Alert;
