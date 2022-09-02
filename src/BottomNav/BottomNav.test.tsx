// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render, fireEvent } from '@testing-library/react';
import { useEffect, useState } from 'react';
import BottomNav from './BottomNav';
import BottomNavItem from './BottomNavItem/BottomNavItem';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';
import MessagesIcon from '../Icons/MessagesIcon/MessagesIcon';
import ProfileIcon from '../Icons/ProfileIcon/ProfileIcon';
import ActivityIcon from '../Icons/ActivityIcon/ActivityIcon';

const SECOND_ITEM_TEST_ID = 'bottom-nav-item-2';

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
 *  BottomNav
 * -----------------------------------------------------------------------------------------------*/

describe('given BottomNav with 4 BottomNavItems', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  let selectedItem = 0;

  beforeEach(() => {
    rendered = render(<BottomNavTest cb={(v: number) => { selectedItem = v; }} />);
    button = rendered.getByTestId(SECOND_ITEM_TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the second BottomNavItem', () => {
    beforeEach(async () => {
      fireEvent.click(button);
    });

    it('selected item should be equal to 1', () => {
      expect(selectedItem).toEqual(1);
    });
  });
});

interface BottomNavTestProps {
  cb: (_arg: number) => void
}

const BottomNavTest = ({ cb }: BottomNavTestProps) => {
  const [isSelected, setIsSelected] = useState(0);

  useEffect(() => {
    cb(isSelected);
  }, [isSelected]);

  return (
    <BottomNav>
      <BottomNavItem
        data-testid="bottom-nav-item-1"
        borders="start"
        onClick={() => setIsSelected(0)}
        label="Search"
        isSelected={isSelected === 0}
        setIcon={({ fill, size, purposeLabel }) => (
          <SearchIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
      <BottomNavItem
        data-testid="bottom-nav-item-2"
        borders="full"
        onClick={() => setIsSelected(1)}
        label="Messages"
        isSelected={isSelected === 1}
        setIcon={({ fill, size, purposeLabel }) => (
          <MessagesIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
      <BottomNavItem
        data-testid="bottom-nav-item-3"
        borders="full"
        onClick={() => setIsSelected(2)}
        label="Profile"
        isSelected={isSelected === 2}
        setIcon={({ fill, size, purposeLabel }) => (
          <ProfileIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
      <BottomNavItem
        data-testid="bottom-nav-item-4"
        borders="end"
        onClick={() => setIsSelected(3)}
        label="Activity"
        isSelected={isSelected === 3}
        setIcon={({ fill, size, purposeLabel }) => (
          <ActivityIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
    </BottomNav>
  );
};
