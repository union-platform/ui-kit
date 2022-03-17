// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import Avatar from './Avatar';

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
 *  Avatar Image
 * -----------------------------------------------------------------------------------------------*/

describe('given a image Avatar', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<AvatarImageTest />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

/* -------------------------------------------------------------------------------------------------
 *  Avatar Fallback
 * -----------------------------------------------------------------------------------------------*/

describe('given a fallback Avatar', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(<AvatarFallbackTest />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const AvatarImageTest = (props: React.ComponentProps<typeof Avatar>) => (
  <Avatar
    src="https://images.unsplash.com/photo-1562293803-4a30b3b0614a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    alt="Colm Tuite"
    size={60}
    {...props}
  />
);

const AvatarFallbackTest = (props: React.ComponentProps<typeof Avatar>) => (
  <Avatar
    fallbackValue="AD"
    size={60}
    active
    {...props}
  />
);
