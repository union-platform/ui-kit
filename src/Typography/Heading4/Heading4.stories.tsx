// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading4 from './Heading4';

export default {
  title: 'Typography/Heading4',
  component: Heading4,
} as ComponentMeta<typeof Heading4>;

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
