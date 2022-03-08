// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading1 from './Heading1';

export default {
  title: 'Typography/Heading1',
  component: Heading1,
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => <Heading1 {...args}>Heading</Heading1>;

export const Heading1Regular = Template.bind({});
Heading1Regular.args = {
  weight: 'regular',
};

export const Heading1Bold = Template.bind({});
Heading1Bold.args = {
  weight: 'bold',
};
