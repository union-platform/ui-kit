// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { styled } from '@stitches/react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface DropdownTriggerProps {
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
  children, ...props
}: DropdownTriggerProps) => (
  <StyledTrigger {...props}>
    {children}
  </StyledTrigger>
);

DropdownTrigger.defaultProps = {
  children: undefined,
};

export default DropdownTrigger;
