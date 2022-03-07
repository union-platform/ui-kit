// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { fireEvent, RenderResult, render } from '@testing-library/react';
import ToogleButton from './ToogleButton';

const TEST_ID = 'test-ToogleButton';

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
 * Primary ToogleButton
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary ToogleButton', () => {
  let rendered: RenderResult;
  let toogleButton: HTMLElement;
  const onPressedChange = jest.fn();

  beforeEach(() => {
    rendered = render(
      <ToogleButtonTest
        data-testid={TEST_ID}
        onPressedChange={onPressedChange}
      >
        Button
      </ToogleButtonTest>,
    );
    toogleButton = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the ToogleButton', () => {
    beforeEach(async () => {
      fireEvent.click(toogleButton);
    });

    it('should call `onPressedChange` prop', () => {
      expect(onPressedChange).toHaveBeenCalled();
    });
  });
});

describe('given a disabled primary ToogleButton', () => {
  let rendered: RenderResult;
  let toogleButton: HTMLElement;
  const onPressedChange = jest.fn();

  beforeEach(() => {
    rendered = render(
      <ToogleButtonTest
        onPressedChange={onPressedChange}
        disabled
        data-testid={TEST_ID}
      >
        Button
      </ToogleButtonTest>,
    );
    toogleButton = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the ToogleButton', () => {
    beforeEach(async () => {
      fireEvent.click(toogleButton);
    });

    it('should\'nt call `onPressedChange` prop', () => {
      expect(onPressedChange).not.toHaveBeenCalled();
    });
  });
});

const ToogleButtonTest = ({ children, ...props }: React.ComponentProps<typeof ToogleButton>) => (
  <ToogleButton {...props}>
    {children}
  </ToogleButton>
);
