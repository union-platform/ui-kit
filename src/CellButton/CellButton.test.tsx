// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { fireEvent, RenderResult, render } from '@testing-library/react';
import CellButton from './CellButton';
import UserPlusIcon from '../Icons/UserPlusIcon/UserPlusIcon';

const TEST_ID = 'test-cellButton';

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
 * Primary CellButton
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary CellButton', () => {
  let rendered: RenderResult;
  let cellButton: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(
      <CellButton
        data-testid={TEST_ID}
        onClick={onClick}
        label="Test Button"
      >
        <UserPlusIcon size="24px" fill="#0DBC44" />
      </CellButton>,
    );
    cellButton = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the CellButton', () => {
    beforeEach(async () => {
      fireEvent.click(cellButton);
    });

    it('should call `onClick` prop', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});

describe('given a disabled primary CellButton', () => {
  let rendered: RenderResult;
  let cellButton: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(
      <CellButton
        data-testid={TEST_ID}
        onClick={onClick}
        disabled
        label="Test Button"
      >
        <UserPlusIcon size="24px" fill="#0DBC44" />
      </CellButton>,
    );
    cellButton = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the CellButton', () => {
    beforeEach(async () => {
      fireEvent.click(cellButton);
    });

    it('should\'nt call `onClick` prop', () => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
