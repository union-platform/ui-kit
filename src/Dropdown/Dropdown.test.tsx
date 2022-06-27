// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import {
  RenderResult, render,
} from '@testing-library/react';
import Dropdown from './Dropdown';
import DropdownTrigger from './DropdownTrigger/DropdownTrigger';
import EllipsisIcon from '../Icons/EllipsisIcon/EllipsisIcon';
import DropdownContent from './DropdownContent/DropdownContent';
import DropdownItem from './DropdownItem/DropdownItem';
import AddIcon from '../Icons/PlusIcon/PlusIcon';
import Switch from '../Switch/Switch';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';

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
 *  Dropdown
 * -----------------------------------------------------------------------------------------------*/

describe('given a Dropdown', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<DropdownTest />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const DropdownTest = (props: React.ComponentProps<typeof Dropdown>) => {
  const [switchSelected, setSwitchSelected] = React.useState(false);

  const handleSwitchClick = (e: Event) => {
    // Prevents dropdown from closing
    e.preventDefault();

    setSwitchSelected(!switchSelected);
  };

  return (
    <Dropdown {...props}>
      <DropdownTrigger>
        <EllipsisIcon size="18px" data-testid={TRIGGER_TESTID} />
      </DropdownTrigger>

      <DropdownContent data-testid={CONTENT_TESTID}>
        <DropdownItem iconComponent={<AddIcon size="24px" />}>
          New Tab
        </DropdownItem>
        <DropdownItem>New Window</DropdownItem>
        <DropdownItem
          onSelect={handleSwitchClick}
          controlComponent={<Switch checked={switchSelected} />}
        >
          Item with control

        </DropdownItem>
        <DropdownItem disabled>New Private Window</DropdownItem>
        <DropdownItem negative iconComponent={<DeleteIcon size="24px" />}>
          New Tab
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
