// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { keyframes, styled } from '@stitches/react';
import { ReactNode } from 'react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface AlertContentProps {
  /**
   *  Children of AlertContent, like `AlertTitle` and `AlertDescription`.
   */
   children: ReactNode;
}

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: GrayShades.dark,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 15,
  boxShadow: '0px 2px 3px 0px hsla(0, 0%, 0%, 0.1)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  textAlign: 'left',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

/**
 *  Contains content to be rendered when the dialog is open.
 */
const AlertContent = ({
  children, ...props
}: AlertContentProps) => (
  <AlertDialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props}>
      {children}
    </StyledContent>
  </AlertDialogPrimitive.Portal>
);

export default AlertContent;
