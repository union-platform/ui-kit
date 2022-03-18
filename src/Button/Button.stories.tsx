/* eslint-disable react/jsx-props-no-spreading */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Union-UI/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4687%3A34346',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: 'primary',
  disabled: false,
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  disabled: false,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: 'secondary',
  disabled: false,
};

export const SpecialButton = Template.bind({});
SpecialButton.args = {
  variant: 'special',
  disabled: false,
};
