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
      initial: {
        margin: '0 16px',
      },
      from600: {
        margin: '0 40px',
      },
      from900: {
        margin: '0 auto',
        maxWidth: '1140px',
        minWidth: '900px',
        width: '100%',
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
      '@initial': 'initial',
      '@min600': 'from600',
      '@min900': 'from900',
    }}
    {...props}
  >
    {children}
  </LayoutContainer>
);

export default Layout;
