// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { Trigger as TabsPrimitive } from '@radix-ui/react-tabs';
import { ReactNode } from 'react';
import GrayShades from '../../Colors/GrayShades/GrayShades';
import BrandColors from '../../Colors/BrandColors/BrandColors';

const StyledTrigger = styled(TabsPrimitive, {
  all: 'unset',
  fontFamily: 'Open Sans, sans-serif',
  backgroundColor: GrayShades.white,
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  lineHeight: 1,
  color: GrayShades.navigationGray,
  userSelect: 'none',
  cursor: 'pointer',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: BrandColors.darkGreen },
  '&[data-state="active"]': {
    color: BrandColors.darkGreen,
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', backgroundColor: BrandColors.transparentGreen1 },
});

export interface TabsTriggerProps {
  /**
   *  Value of the trigger
   */
  value: string;
  /**
   *  Trigger contents
   */
   children: ReactNode;

}

/**
 *  Trigger to navigate between tabs.
 */
const TabsTrigger = ({
  children, value,
}: TabsTriggerProps) => (
  <StyledTrigger value={value}>
    {children}
  </StyledTrigger>
);

export default TabsTrigger;
