// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import Counter from './Counter';

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
 *  Counter
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary Counter', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<CounterTest value={10} />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const CounterTest = (props: React.ComponentProps<typeof Counter>) => (
  <Counter {...props} />
);
