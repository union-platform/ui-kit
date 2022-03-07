// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import Enzyme, { ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TextInput from './TextInput';

Enzyme.configure({ adapter: new Adapter() });

const TEST_ID = 'test-textinput';
const COUNTER_TESTID = 'counter';
const ERROR_TEXT_TESTID = 'error-text';

/* -------------------------------------------------------------------------------------------------
 * TextInput
 * -----------------------------------------------------------------------------------------------*/

describe('given a default TextInput', () => {
  let rendered: RenderResult;
  let enzymeComponent: ReactWrapper;
  const onChange = jest.fn();
  let counterComponent: HTMLElement | null;
  let errorTextComponent: HTMLElement | null;

  beforeEach(() => {
    rendered = render(<TextInputTest type="text" data-testid={TEST_ID} onChange={onChange} />);
    counterComponent = rendered.queryByTestId(COUNTER_TESTID);
    errorTextComponent = rendered.queryByTestId(ERROR_TEXT_TESTID);
    enzymeComponent = Enzyme.mount(<TextInputTest errorText="Some error text" type="text" data-testid={TEST_ID} onChange={onChange} />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should have no counter', async () => {
    expect(counterComponent).toBeEmptyDOMElement();
  });

  it('should have no error text', async () => {
    expect(errorTextComponent).toBeEmptyDOMElement();
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
 * TextInput — disabled
 * -----------------------------------------------------------------------------------------------*/

describe('given a disabled TextInput', () => {
  let rendered: RenderResult;
  const onChange = jest.fn();
  let enzymeComponent: ReactWrapper;

  beforeEach(() => {
    rendered = render(<TextInputTest type="text" onChange={onChange} disabled data-testid={TEST_ID} />);
    enzymeComponent = Enzyme.mount(<TextInputTest disabled type="text" data-testid={TEST_ID} onChange={onChange} />);
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

/* -------------------------------------------------------------------------------------------------
 * TextInput — with counter
 * -----------------------------------------------------------------------------------------------*/

describe('given a TextInput with counter', () => {
  let rendered: RenderResult;
  const onChange = jest.fn();
  const onError = jest.fn();
  let counterComponent: HTMLElement | null;

  beforeEach(() => {
    rendered = render(<TextInputTest errorText="Some error text" value="Some string with more that 10 symbols" onError={onError} maxSymbols={10} type="text" onChange={onChange} data-testid={TEST_ID} />);
    counterComponent = rendered.queryByTestId(COUNTER_TESTID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  it('should have counter', async () => {
    expect(counterComponent).toBeInTheDocument();
  });

  describe('when value above max', () => {
    // eslint-disable-next-line no-unused-vars
    let errorTextComponent: HTMLElement | null;

    beforeEach(async () => {
      errorTextComponent = rendered.queryByTestId(ERROR_TEXT_TESTID);
    });

    it('should show error text if defined', () => {
      expect(errorTextComponent).toBeInTheDocument();
    });

    it('should call `onError` prop', () => {
      expect(onError).toHaveBeenCalled();
    });
  });
});

const TextInputTest = (props: React.ComponentProps<typeof TextInput>) => (
  <TextInput {...props} />
);
