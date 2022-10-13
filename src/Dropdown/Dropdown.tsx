// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Root } from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

export interface DropdownProps {
  /**
   *  Components of the Dropdown, like `DropdownTrigger` and `DropdownContent`
   */
  children?: ReactNode;
  /**
   *  The controlled open state of the dropdown menu.
   *  Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean;
  /**
   *   Event handler called when the open state of the context menu changes.
  */
  onOpenChange?: (_open: boolean) => void;
}

/**
 *  Wrapper of other Dropdown components, like `DropdownTrigger` and `DropdownContent`
 */
const Dropdown = ({
  children, onOpenChange, open, ...props
}: DropdownProps) => (
  <Root open={open} onOpenChange={onOpenChange} {...props}>
    {children}
  </Root>
);

Dropdown.defaultProps = {
  children: undefined,
  onOpenChange: undefined,
  open: undefined,
};

export default Dropdown;
