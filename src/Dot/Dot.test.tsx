// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import Dot from './Dot';

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
 *  Dot
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary Dot', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<DotTest />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const DotTest = (props: React.ComponentProps<typeof Dot>) => (
  <Dot {...props} />
);
