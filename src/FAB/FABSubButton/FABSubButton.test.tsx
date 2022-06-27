// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render, fireEvent } from '@testing-library/react';
import FABSubButton from './FABSubButton';
import AddToTeamIcon from '../../Icons/AddToTeamIcon/AddToTeamIcon';

const FAB_OPTION_ID = 'fab-option';

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
 *  FAB
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary FAB', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<FABTest onClick={onClick} />);
    button = rendered.getByTestId(FAB_OPTION_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the button', () => {
    beforeEach(async () => {
      fireEvent.click(button);
    });

    it('should call `onClick` prop', () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});

const FABTest = (props: React.ComponentProps<typeof FABSubButton>) => (
  <FABSubButton {...props} data-testid="fab-option" label="Add to Team" icon={<AddToTeamIcon size="24px" />} />
);
