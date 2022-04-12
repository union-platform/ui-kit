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
import EllipsisIcon18 from '../Icons/18pt/EllipsisIcon18/EllipsisIcon18';
import DropdownContent from './DropdownContent/DropdownContent';
import DropdownItem from './DropdownItem/DropdownItem';
import AddIcon24 from '../Icons/24pt/AddIcon24/AddIcon24';
import Switch from '../Switch/Switch';
import DeleteIcon24 from '../Icons/24pt/DeleteIcon24/DeleteIcon24';

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
        <EllipsisIcon18 data-testid={TRIGGER_TESTID} />
      </DropdownTrigger>

      <DropdownContent data-testid={CONTENT_TESTID}>
        <DropdownItem iconComponent={<AddIcon24 />}>
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
        <DropdownItem negative iconComponent={<DeleteIcon24 />}>
          New Tab
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
