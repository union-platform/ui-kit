// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { Trigger as TabsPrimitive } from '@radix-ui/react-tabs';
import { ReactNode } from 'react';

const StyledTrigger = styled(TabsPrimitive, {
  all: 'unset',
  fontFamily: 'Open Sans, sans-serif',
  backgroundColor: 'white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  lineHeight: 1,
  color: '#B3B3B3',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '#0DBC44' },
  '&[data-state="active"]': {
    color: '#0DBC44',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', backgroundColor: '#0DBC4433' },
});

export interface TabsTriggerProps {
  /**
   * Button contents
   */
  value: string;
  /**
   * Button contents
   */
   children: ReactNode;

}

/**
 * Primary UI component for user interaction
 */
const TabsTrigger = ({
  // eslint-disable-next-line no-unused-vars
  children, value,
}: TabsTriggerProps) => (
  <StyledTrigger value={value}>
    {children}
  </StyledTrigger>
);

export default TabsTrigger;
