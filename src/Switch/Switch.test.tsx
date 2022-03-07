// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

const TEST_ID = 'test-switch';

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
 *  Switch
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary Switch', () => {
  let rendered: RenderResult;
  const onClick = jest.fn();
  let switchComponent: HTMLElement;

  beforeEach(() => {
    rendered = render(<SwitchTest data-testid={TEST_ID} onCheckedChange={onClick} />);
    switchComponent = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the Switch', () => {
    beforeEach(async () => {
      fireEvent.click(switchComponent);
    });

    it('should call `onClick` prop', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});

/* -------------------------------------------------------------------------------------------------
 *  Switch — Disabled
 * -----------------------------------------------------------------------------------------------*/

describe('given a disabled Switch', () => {
  let rendered: RenderResult;
  let switchComponent: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<SwitchTest data-testid={TEST_ID} disabled onCheckedChange={onClick} />);
    switchComponent = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the Switch', () => {
    beforeEach(async () => {
      fireEvent.click(switchComponent);
    });

    it('should\'t call `onClick` prop', () => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

const SwitchTest = (props: React.ComponentProps<typeof Switch>) => (
  <Switch {...props} />
);
