// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { RenderResult, render } from '@testing-library/react';
import Enzyme, { ReactWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import OTPInput from './OTPInput';
import SingleOTPInput from './OTPSingleInput';

Enzyme.configure({ adapter: new Adapter() });

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
 *  OTPInput
 * -----------------------------------------------------------------------------------------------*/

describe('given a default OTPInput', () => {
  let rendered: RenderResult;
  const onChangeOTP = jest.fn();
  let enzymeComponent: ReactWrapper;

  beforeEach(() => {
    rendered = render(<OTPInputTest onChangeOTP={onChangeOTP} length={4} />);
    enzymeComponent = Enzyme.mount(<SingleOTPInputTest value="12" onChange={onChangeOTP} />);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when changing input', () => {
    beforeEach(async () => {
      enzymeComponent.find('input').simulate('change');
    });

    it('should call `onChange` prop', () => {
      expect(onChangeOTP).toHaveBeenCalled();
    });
  });
});

const OTPInputTest = (props: React.ComponentProps<typeof OTPInput>) => (
  <OTPInput {...props} />
);

const SingleOTPInputTest = (props: React.ComponentProps<typeof SingleOTPInput>) => (
  <SingleOTPInput {...props} />
);
