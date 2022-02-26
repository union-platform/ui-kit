// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface LayoutProps {
   /**
   * Button contents
   */
    children: ReactNode;
}

const LayoutContainer = styled('div', {
  margin: '0 16px 0 16px',
});

/**
 * Primary UI component for user interaction
 */
const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    {children}
  </LayoutContainer>
);

export default Layout;
