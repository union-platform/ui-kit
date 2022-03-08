// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading3 from './Heading3';

export default {
  title: 'Typography/Heading3',
  component: Heading3,
} as ComponentMeta<typeof Heading3>;

const Template: ComponentStory<typeof Heading3> = (args) => <Heading3 {...args}>Heading</Heading3>;

export const Heading3Regular = Template.bind({});
Heading3Regular.args = {
  weight: 'regular',
};

export const Heading3Bold = Template.bind({});
Heading3Bold.args = {
  weight: 'bold',
};
