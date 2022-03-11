// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { TabsList as TabsPrimitive } from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

const StyledList = styled(TabsPrimitive, {
  flexShrink: 0,
  display: 'flex',
});

export interface TabsListProps {
  /**
   *  Aria label of the list of tabs
   */
  ariaLabel: string;
  /**
   *  Contents of the tabs (triggers)
   */
  children: ReactNode;
}

/**
 *  List of buttons in tabs.
 */
const TabsList = ({
  // eslint-disable-next-line no-unused-vars
  ariaLabel, children,
}: TabsListProps) => (
  <StyledList aria-label={ariaLabel}>
    {children}
  </StyledList>
);

export default TabsList;
