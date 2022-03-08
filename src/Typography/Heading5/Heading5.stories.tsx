// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading5 from './Heading5';

export default {
  title: 'Typography/Heading5',
  component: Heading5,
} as ComponentMeta<typeof Heading5>;

const Template: ComponentStory<typeof Heading5> = (args) => <Heading5 {...args}>Heading</Heading5>;

export const Heading5Regular = Template.bind({});
Heading5Regular.args = {
  weight: 'regular',
};

export const Heading5Bold = Template.bind({});
Heading5Bold.args = {
  weight: 'bold',
};
