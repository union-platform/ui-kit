// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading5 from './Heading5';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading5',
  component: Heading5,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Heading5>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Heading5> = (args) => <Heading5 {...args}>Heading</Heading5>;

export const Heading5Regular = Template.bind({});
Heading5Regular.args = {
  weight: 'regular',
};

export const Heading5Bold = Template.bind({});
Heading5Bold.args = {
  weight: 'bold',
};
