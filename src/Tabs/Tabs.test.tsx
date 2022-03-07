// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import TabsTrigger from './TabsTrigger/TabsTrigger';
import Tabs from './Tabs';
import TabsList from './TabsList/TabsList';

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
 *  Tabs
 * -----------------------------------------------------------------------------------------------*/

describe('given Tabs', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<TabsTest />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const TabsTest = () => (
  <Tabs>
    <TabsList ariaLabel="Manage your account">
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
  </Tabs>
);
