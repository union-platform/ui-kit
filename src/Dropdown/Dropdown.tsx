// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

export interface DropdownProps {
  /**
   *  Components of the Dropdown, like `DropdownTrigger` and `DropdownContent`
   */
   children?: ReactNode;
}

/**
 *  Wrapper of other Dropdown components, like `DropdownTrigger` and `DropdownContent`
 */
const Dropdown = ({
  children, ...props
}: DropdownProps) => (
  <DropdownMenuPrimitive.Root {...props}>
    {children}
  </DropdownMenuPrimitive.Root>
);

Dropdown.defaultProps = {
  children: undefined,
};

export default Dropdown;
