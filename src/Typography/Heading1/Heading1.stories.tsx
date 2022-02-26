// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading1 from './Heading1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading1',
  component: Heading1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Heading1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Heading1> = (args) => <Heading1 {...args}>Heading</Heading1>;

export const Heading1Regular = Template.bind({});
Heading1Regular.args = {
  weight: 'regular',
};

export const Heading1Bold = Template.bind({});
Heading1Bold.args = {
  weight: 'bold',
};
