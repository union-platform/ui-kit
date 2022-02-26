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
   * Button contents
   */
   children: ReactNode;
  /**
   * Button contents
   */
  defaultValue?: string;
}

/**
 * Primary UI component for user interaction
 */
const Tabs = ({
  // eslint-disable-next-line no-unused-vars
  children, defaultValue,
}: TabsProps) => (
  <StyledTabs defaultValue={defaultValue}>
    {children}
  </StyledTabs>
);

Tabs.defaultProps = {
  defaultValue: null,
};

export default Tabs;
