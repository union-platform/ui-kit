// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { keyframes, styled } from '@stitches/react';
import { ReactNode } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

export interface ModalContentProps {
  /**
   *  Children of the modal content, like ModalTitle or ModalDescription.
   */
   children: ReactNode;
}

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  textAlign: 'left',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

/**
 *  Contains content to be rendered in the open dialog.
 */
const ModalContent = ({
  children, ...props
}: ModalContentProps) => (
  <DialogPrimitive.Portal>
    <ModalOverlay />
    <StyledContent {...props}>
      {children}
    </StyledContent>
  </DialogPrimitive.Portal>
);

export default ModalContent;
