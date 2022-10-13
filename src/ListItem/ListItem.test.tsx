// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render, fireEvent } from '@testing-library/react';
import { ListItemExample } from './ListItem.stories';

const TEST_ID = 'listItem-1';

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
 *  ListItem
 * -----------------------------------------------------------------------------------------------*/

describe('given a list with ListItems', () => {
  let rendered: RenderResult;
  let item: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ListItemExample callback={onClick} />);
    item = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the CellButton', () => {
    beforeEach(async () => {
      fireEvent.click(item);
    });

    it('should call `onClick` prop', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});
