// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { TabsList as TabsPrimitive } from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

const StyledList = styled(TabsPrimitive, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid mauve',
});

export interface TabsListProps {
  /**
   * Button contents
   */
  ariaLabel: string;
  /**
   * Button contents
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
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
