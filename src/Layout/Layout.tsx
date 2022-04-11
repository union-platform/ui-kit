// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ReactNode } from 'react';
import { styled } from '../stitches.config';

export interface LayoutProps {
  /**
   *  Content of Layout
   */
  children: ReactNode;
}

const LayoutContainer = styled('div', {
  height: '100%',
  variants: {
    sideMargin: {
      '16pt': {
        margin: '0 16px',
      },
      '40pt': {
        margin: '0 40px',
      },
      '80pt': {
        margin: '0 80px',

      },
    },
  },
});

/**
 *  Foundation of any screen. Every UI building block should be placed inside the Layout.
 */
const Layout = ({ children, ...props }: LayoutProps) => (
  <LayoutContainer
    sideMargin={{
      '@initial': '16pt',
      '@bp1': '40pt',
      '@bp2': '80pt',
    }}
    {...props}
  >
    {children}
  </LayoutContainer>
);

export default Layout;
