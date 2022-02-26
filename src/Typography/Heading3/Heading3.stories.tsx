// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading3 from './Heading3';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading3',
  component: Heading3,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Heading3>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Heading3> = (args) => <Heading3 {...args}>Heading</Heading3>;

export const Heading3Regular = Template.bind({});
Heading3Regular.args = {
  weight: 'regular',
};

export const Heading3Bold = Template.bind({});
Heading3Bold.args = {
  weight: 'bold',
};
