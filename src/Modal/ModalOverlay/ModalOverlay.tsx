// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Overlay } from '@radix-ui/react-dialog';
import { keyframes, styled } from '@stitches/react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledOverlay = styled(Overlay, {
  backgroundColor: GrayShades.dark,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

/**
 *  A layer that covers the inert portion of the view when the dialog is open.
 */
const ModalOverlay = ({
  ...props
}) => (
  <StyledOverlay {...props} />
);

export default ModalOverlay;
