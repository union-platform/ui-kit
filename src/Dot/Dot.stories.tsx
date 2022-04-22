// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dot from './Dot';

export default {
  title: 'Union-UI/Dot',
  component: Dot,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4840%3A37551',
    },
  },
} as ComponentMeta<typeof Dot>;

const Template: ComponentStory<typeof Dot> = (args) => <Dot {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  variant: 'positive',
};

export const Negative = Template.bind({});
Negative.args = {
  variant: 'negative',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  fill: '#2EBBE8',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 32,
};
