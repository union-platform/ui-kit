// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { fireEvent, RenderResult, render } from '@testing-library/react';
import IconButton from './IconButton';
import UserPlusIcon from '../Icons/UserPlusIcon/UserPlusIcon';

const TEST_ID = 'test-iconButton';

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
 * Primary IconButton
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary IconButton', () => {
  let rendered: RenderResult;
  let iconButton: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(
      <IconButtonTest
        data-testid={TEST_ID}
        onClick={onClick}
      >
        <UserPlusIcon fill="#ffffff" />
      </IconButtonTest>,
    );
    iconButton = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the IconButton', () => {
    beforeEach(async () => {
      fireEvent.click(iconButton);
    });

    it('should call `onClick` prop', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});

describe('given a disabled primary IconButton', () => {
  let rendered: RenderResult;
  let iconButton: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(
      <IconButtonTest
        data-testid={TEST_ID}
        onClick={onClick}
        disabled
      >
        <UserPlusIcon fill="#ffffff" />
      </IconButtonTest>,
    );
    iconButton = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the IconButton', () => {
    beforeEach(async () => {
      fireEvent.click(iconButton);
    });

    it('should\'nt call `onClick` prop', () => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

const IconButtonTest = ({ children, ...props }: React.ComponentProps<typeof IconButton>) => (
  <div>
    <IconButton {...props}>
      {children}
    </IconButton>
  </div>
);
