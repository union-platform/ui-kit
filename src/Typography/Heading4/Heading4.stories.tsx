// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading4 from './Heading4';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading4',
  component: Heading4,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Heading4>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Heading4> = (args) => <Heading4 {...args}>Heading</Heading4>;

export const Heading4Regular = Template.bind({});
Heading4Regular.args = {
  weight: 'regular',
};

export const Heading4SemiBold = Template.bind({});
Heading4SemiBold.args = {
  weight: 'semibold',
};

export const Heading4Bold = Template.bind({});
Heading4Bold.args = {
  weight: 'bold',
};
