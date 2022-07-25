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
   *   Event handler called when the open state of the context menu changes.
  */
  onOpenChange?: (_open: boolean) => void;
}

/**
 *  Wrapper of other Dropdown components, like `DropdownTrigger` and `DropdownContent`
 */
const Dropdown = ({
  children, onOpenChange, ...props
}: DropdownProps) => (
  <Root onOpenChange={onOpenChange} {...props}>
    {children}
  </Root>
);

Dropdown.defaultProps = {
  children: undefined,
  onOpenChange: undefined,
};

export default Dropdown;
