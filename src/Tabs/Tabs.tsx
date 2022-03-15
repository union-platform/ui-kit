// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
});

export interface TabsProps {
  /**
   *  Tabs contents
   */
   children: ReactNode;
  /**
   *  Value that be shown on first render.
   */
  defaultValue?: string;
}

/**
 *  UI component for switching between screens.
 */
const Tabs = ({
  // eslint-disable-next-line no-unused-vars
  children, defaultValue, ...props
}: TabsProps) => (
  <StyledTabs {...props} defaultValue={defaultValue}>
    {children}
  </StyledTabs>
);

Tabs.defaultProps = {
  defaultValue: null,
};

export default Tabs;
