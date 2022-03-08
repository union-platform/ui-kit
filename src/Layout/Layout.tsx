// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';

export interface LayoutProps {
  /**
   *  Content of Layout
   */
  children: ReactNode;
}

const LayoutContainer = styled('div', {
  margin: '0 16px 0 16px',
});

/**
 *  Foundation of any screen. Every UI building block should be placed inside the Layout.
 */
const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer>
    {children}
  </LayoutContainer>
);

export default Layout;
