// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render, fireEvent } from '@testing-library/react';
import FAB from './FAB';
import FABSubButton from './FABSubButton/FABSubButton';
import AddToTeamIcon from '../Icons/AddToTeamIcon/AddToTeamIcon';

const FAB_ID = 'fab';
const FAB_OPTIONS_ID = 'fab-options';

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
  let fab: HTMLElement;
  let fabOptions: HTMLElement | null;

  beforeEach(() => {
    rendered = render(<FABTest />);
    fab = rendered.getByTestId(FAB_ID);
    fabOptions = rendered.queryByTestId(FAB_OPTIONS_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the FAB', () => {
    beforeEach(async () => {
      fireEvent.click(fab);
      fabOptions = rendered.queryByTestId(FAB_OPTIONS_ID);
    });

    it('should render visible options', () => {
      expect(fabOptions).toBeInTheDocument();
    });

    describe('and clicking the checkbox again', () => {
      beforeEach(async () => {
        fireEvent.click(fab);
      });

      it('should remove options', () => {
        expect(fabOptions).not.toBeInTheDocument();
      });
    });
  });
});

const FABTest = (props: React.ComponentProps<typeof FAB>) => (
  <FAB {...props}>
    <FABSubButton label="Add to Team" icon={<AddToTeamIcon size="24px" />} />
    <FABSubButton label="Add to Project" icon={<AddToTeamIcon size="24px" />} />
    <FABSubButton icon={<AddToTeamIcon size="24px" />} />
    <FABSubButton label="Something" />
  </FAB>
);
