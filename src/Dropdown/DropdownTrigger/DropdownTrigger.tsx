// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { CSSProperties, ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { styled } from '@stitches/react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface DropdownTriggerProps {
  /**
   *  CSS style properties passed to the component
   */
   style?: CSSProperties;
  /**
   *  Component which will be trigger the Dropdown to open.
   */
   children?: ReactNode;
}

const StyledTrigger = styled(DropdownMenuPrimitive.Trigger, {
  border: 0,
  background: GrayShades.white,
  cursor: 'pointer',
});

/**
 *  Trigger component, which opens the Dropdown.
 */
const DropdownTrigger = ({
  children, style, ...props
}: DropdownTriggerProps) => (
  <StyledTrigger style={style} {...props}>
    {children}
  </StyledTrigger>
);

DropdownTrigger.defaultProps = {
  children: undefined,
  style: undefined,
};

export default DropdownTrigger;
