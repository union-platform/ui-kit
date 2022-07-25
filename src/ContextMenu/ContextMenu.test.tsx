// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import {
  RenderResult, render,
} from '@testing-library/react';
import EllipsisIcon from '../Icons/EllipsisIcon/EllipsisIcon';
import AddIcon from '../Icons/PlusIcon/PlusIcon';
import Switch from '../Switch/Switch';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';
import ContextMenu from './ContextMenu';
import ContextMenuTrigger from './ContextMenuTrigger/ContextMenuTrigger';
import ContextMenuContent from './ContextMenuContent/ContextMenuContent';
import ContextMenuItem from './ContextMenuItem/ContextMenuItem';

const TRIGGER_TESTID = 'test-trigger';
const CONTENT_TESTID = 'test-content';

global.ResizeObserver = class ResizeObserver {
  cb: any;

  constructor(cb: any) {
    this.cb = cb;
  }

  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }

  unobserve() {}

  disconnect() {}
};

/* -------------------------------------------------------------------------------------------------
 *  ContextMenu
 * -----------------------------------------------------------------------------------------------*/

describe('given a ContextMenu', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<ContextMenuTest />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const ContextMenuTest = (props: React.ComponentProps<typeof ContextMenu>) => {
  const [switchSelected, setSwitchSelected] = React.useState(false);

  const handleSwitchClick = (e: Event) => {
    // Prevents ContextMenu from closing
    e.preventDefault();

    setSwitchSelected(!switchSelected);
  };

  return (
    <ContextMenu {...props}>
      <ContextMenuTrigger>
        <EllipsisIcon size="18px" data-testid={TRIGGER_TESTID} />
      </ContextMenuTrigger>

      <ContextMenuContent data-testid={CONTENT_TESTID}>
        <ContextMenuItem iconComponent={<AddIcon size="24px" />}>
          New Tab
        </ContextMenuItem>
        <ContextMenuItem>New Window</ContextMenuItem>
        <ContextMenuItem
          onSelect={handleSwitchClick}
          controlComponent={<Switch checked={switchSelected} />}
        >
          Item with control

        </ContextMenuItem>
        <ContextMenuItem disabled>New Private Window</ContextMenuItem>
        <ContextMenuItem negative iconComponent={<DeleteIcon size="24px" />}>
          New Tab
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
