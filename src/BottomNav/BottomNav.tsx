// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { AnimateSharedLayout } from 'framer-motion';
import { ReactNode } from 'react';

export interface BottomNavProps {
  /**
   *  Finite amount of `BottomNavItem`'s
   */
   children: ReactNode[];
}

const BottomNavContainer = styled('div', {
  width: '100%',
  margin: '8px 0 8px 0',
  display: 'flex',
});

/**
 *  Primary navigation component for mobile devices.
 */
const BottomNav = ({ children, ...props }: BottomNavProps) => (
  <AnimateSharedLayout>
    <BottomNavContainer {...props}>
      {children}
    </BottomNavContainer>
  </AnimateSharedLayout>
);

export default BottomNav;
