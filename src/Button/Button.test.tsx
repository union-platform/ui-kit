// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as React from 'react';
import { axe } from 'jest-axe';
import { fireEvent, RenderResult, render } from '@testing-library/react';
import Button from './Button';

const TEST_ID = 'test-button';

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
 * Primary Button
 * -----------------------------------------------------------------------------------------------*/

describe('given a primary Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest data-testid={TEST_ID} onClick={onClick} variant="primary">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
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

describe('given a disabled primary Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest onClick={onClick} disabled data-testid={TEST_ID} variant="primary">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the button', () => {
    beforeEach(async () => {
      fireEvent.click(button);
    });

    it('should\'nt call `onClick` prop', () => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

/* -------------------------------------------------------------------------------------------------
 * Special Button
 * -----------------------------------------------------------------------------------------------*/

describe('given a special Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest onClick={onClick} data-testid={TEST_ID} variant="special">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
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

describe('given a disabled special Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest onClick={onClick} disabled data-testid={TEST_ID} variant="special">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the button', () => {
    beforeEach(async () => {
      fireEvent.click(button);
    });

    it('should\'nt call `onClick` prop', () => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

/* -------------------------------------------------------------------------------------------------
 * Secondary Button
 * -----------------------------------------------------------------------------------------------*/

describe('given a secondary Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest onClick={onClick} data-testid={TEST_ID} variant="secondary">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
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

describe('given a disabled secondary Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest onClick={onClick} disabled data-testid={TEST_ID} variant="secondary">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the button', () => {
    beforeEach(async () => {
      fireEvent.click(button);
    });

    it('should\'nt call `onClick` prop', () => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

/* -------------------------------------------------------------------------------------------------
 * Text Button
 * -----------------------------------------------------------------------------------------------*/

describe('given a text Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest onClick={onClick} data-testid={TEST_ID} variant="text">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
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

describe('given a disabled text Button', () => {
  let rendered: RenderResult;
  let button: HTMLElement;
  const onClick = jest.fn();

  beforeEach(() => {
    rendered = render(<ButtonTest onClick={onClick} disabled data-testid={TEST_ID} variant="text">Button</ButtonTest>);
    button = rendered.getByTestId(TEST_ID);
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });

  describe('when clicking the button', () => {
    beforeEach(async () => {
      fireEvent.click(button);
    });

    it('should\'nt call `onClick` prop', () => {
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

const ButtonTest = (props: React.ComponentProps<typeof Button>) => (
  <Button {...props}>
    Button
  </Button>
);
