// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import Enzyme, { ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SearchInput from './SearchInput';

Enzyme.configure({ adapter: new Adapter() });

const TEST_ID = 'test-textinput';

/* -------------------------------------------------------------------------------------------------
 * SearchInput
 * -----------------------------------------------------------------------------------------------*/

describe('given a default SearchInput', () => {
  let rendered: RenderResult;
  let enzymeComponent: ReactWrapper;
  const onChange = jest.fn();

  beforeEach(() => {
    rendered = render(<SearchInputTest data-testid={TEST_ID} onChange={onChange} />);
    enzymeComponent = Enzyme.mount(<SearchInputTest data-testid={TEST_ID} onChange={onChange} />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when changing input', () => {
    beforeEach(async () => {
      enzymeComponent.find('input').simulate('change');
    });

    it('should call `onChange` prop', () => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});

/* -------------------------------------------------------------------------------------------------
 * SearchInput — disabled
 * -----------------------------------------------------------------------------------------------*/

describe('given a disabled SearchInput', () => {
  let rendered: RenderResult;
  const onChange = jest.fn();
  let enzymeComponent: ReactWrapper;

  beforeEach(() => {
    rendered = render(<SearchInputTest onChange={onChange} disabled data-testid={TEST_ID} />);
    enzymeComponent = Enzyme.mount(<SearchInputTest
      disabled
      data-testid={TEST_ID}
      onChange={onChange}
    />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when changing input', () => {
    beforeEach(async () => {
      enzymeComponent.find('input').simulate('change');
    });

    it('should\'nt call `onChange` prop', () => {
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});

const SearchInputTest = (props: React.ComponentProps<typeof SearchInput>) => (
  <SearchInput {...props} />
);
