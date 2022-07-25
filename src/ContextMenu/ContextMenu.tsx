// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Root } from '@radix-ui/react-context-menu';
import { ReactNode } from 'react';

export interface ContextMenuProps {
  /**
   *  Components of the ContextMenu, like `ContextMenuTrigger` and `ContextMenuContent`
   */
   children?: ReactNode;
  /**
   *   Event handler called when the open state of the context menu changes.
   */
   onOpenChange?: (_open: boolean) => void;
}

/**
 *  Wrapper of other ContextMenu components, like `ContextMenuTrigger` and `ContextMenuContent`
 */
const ContextMenu = ({
  children, onOpenChange, ...props
}: ContextMenuProps) => (
  <Root onOpenChange={onOpenChange} {...props}>
    {children}
  </Root>
);

ContextMenu.defaultProps = {
  children: undefined,
  onOpenChange: undefined,
};

export default ContextMenu;
