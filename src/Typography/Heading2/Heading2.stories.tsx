// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading2 from './Heading2';

export default {
  title: 'Typography/Heading2',
  component: Heading2,
} as ComponentMeta<typeof Heading2>;

const Template: ComponentStory<typeof Heading2> = (args) => <Heading2 {...args}>Heading</Heading2>;

export const Heading2Regular = Template.bind({});
Heading2Regular.args = {
  weight: 'regular',
};

export const Heading2Bold = Template.bind({});
Heading2Bold.args = {
  weight: 'bold',
};
