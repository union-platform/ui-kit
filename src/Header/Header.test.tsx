// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import {
  RenderResult, render, fireEvent, waitFor,
} from '@testing-library/react';
import Header from './Header';
import Tabs from '../Tabs/Tabs';
import TabsList from '../Tabs/TabsList/TabsList';
import TabsTrigger from '../Tabs/TabsTrigger/TabsTrigger';
import EllipsisIcon18 from '../Icons/18pt/EllipsisIcon18/EllipsisIcon18';

const SEARCH_ICON_TEST_ID = 'test-header-search-button';
const SEARCH_COMPONENT_TEST_ID = 'test-header-search-component';
const TABS_COMPONENT_TEST_ID = 'test-header-tabs-component';
const ADDITIONAL_ICON_TEST_ID = 'test-header-additional-button';
const BACK_LINK_BUTTON_TEST_ID = 'test-header-link-button';

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
 *  Header
 * -----------------------------------------------------------------------------------------------*/

describe('given default Header', () => {
  let rendered: RenderResult;
  let searchButton: HTMLElement;
  let searchComponent: HTMLElement | null;
  let backLinkButton: HTMLElement | null;

  beforeEach(() => {
    rendered = render(<HeaderTest />);
    searchButton = rendered.getByTestId(SEARCH_ICON_TEST_ID);
    searchComponent = rendered.queryByTestId(SEARCH_COMPONENT_TEST_ID);
    backLinkButton = rendered.queryByTestId(BACK_LINK_BUTTON_TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should have no back link button (as we not added a link)', async () => {
    expect(backLinkButton).not.toBeInTheDocument();
  });

  describe('when clicking search icon the header', () => {
    beforeEach(async () => {
      fireEvent.click(searchButton);
    });

    it('should render a search', () => {
      waitFor(() => expect(searchComponent).toBeInTheDocument());
    });

    describe('and clicking the search icon again', () => {
      beforeEach(async () => {
        fireEvent.click(searchButton);
      });

      it('should remove the search', () => {
        waitFor(() => expect(searchComponent).not.toBeInTheDocument());
      });
    });
  });
});

/* -------------------------------------------------------------------------------------------------
 *  Header  with tabs
 * -----------------------------------------------------------------------------------------------*/

describe('given Header with tabs', () => {
  let rendered: RenderResult;
  let tabsComponent: HTMLElement;

  beforeEach(() => {
    rendered = render(<HeaderTest showTabs />);
    tabsComponent = rendered.getByTestId(SEARCH_ICON_TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should show tabs', async () => {
    expect(tabsComponent).toBeInTheDocument();
  });
});

/* -------------------------------------------------------------------------------------------------
 *  Header with additional control
 * -----------------------------------------------------------------------------------------------*/

describe('given Header with additional control', () => {
  let rendered: RenderResult;
  let additionalButton: HTMLElement;

  beforeEach(() => {
    rendered = render(<HeaderTest iconComponent={<EllipsisIcon18 />} />);
    additionalButton = rendered.getByTestId(ADDITIONAL_ICON_TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should show tabs', async () => {
    expect(additionalButton).toBeInTheDocument();
  });
});

/* -------------------------------------------------------------------------------------------------
 *  Header with back link
 * -----------------------------------------------------------------------------------------------*/

describe('given Header with back link', () => {
  let rendered: RenderResult;
  let backLinkButton: HTMLElement;

  beforeEach(() => {
    rendered = render(<HeaderTest backLink="/" />);
    backLinkButton = rendered.getByTestId(BACK_LINK_BUTTON_TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should show tabs', async () => {
    expect(backLinkButton).toBeInTheDocument();
  });
});

const HeaderTest = (props: React.ComponentProps<typeof Header>) => (
  <Header
    {...props}
    withSearch
    tabsComponent={(
      <Tabs data-testid={TABS_COMPONENT_TEST_ID}>
        <TabsList ariaLabel="Manage your account">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
      </Tabs>
)}
    iconComponent={<EllipsisIcon18 />}
    {...props}
  />
);
