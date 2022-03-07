// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import GrayShades from './GrayShades';

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

describe('given the brand colors', () => {
  describe('when using without text', () => {
    const array = Object.keys(GrayShades);

    for (let i = 0; i < array.length; i += 1) {
      const { container } = render(<ColorTest style={{ background: GrayShades[array[i]] }} />);

      it('should have no accessibility violations', async () => {
        expect(await axe(container)).toHaveNoViolations();
      });
    }
  });

  describe('when using with text', () => {
    const array = Object.keys(GrayShades);

    for (let i = 0; i < array.length; i += 1) {
      const { container } = render(<ColorTestWithText
        style={{ background: GrayShades[array[i]] }}
      />);

      it('should have no accessibility violations', async () => {
        expect(await axe(container)).toHaveNoViolations();
      });
    }
  });
});

function ColorTest(props: any) {
  return (
    <div>
      <div {...props} />
    </div>
  );
}

function ColorTestWithText(props: any) {
  return (
    <div>
      <div {...props}>
        Test string
      </div>
    </div>
  );
}
