// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from './Counter';

export default {
  title: 'Union-UI/Counter',
  component: Counter,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4840%3A37805',
    },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 70,
};

export const Negative = Template.bind({});
Negative.args = {
  value: 70,
  negative: true,
};

export const BigNumber = Template.bind({});
BigNumber.args = {
  value: 31415,
};
