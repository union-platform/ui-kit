// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import LinearProgress from './LinearProgress';

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
 *  LinearProgress
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary LinearProgress', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<LinearProgressTest value={10} progress={10} max={20} />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const LinearProgressTest = (props: React.ComponentProps<typeof LinearProgress>) => (
  <LinearProgress aria-label={`Progress ${10}%`} {...props} />
);
