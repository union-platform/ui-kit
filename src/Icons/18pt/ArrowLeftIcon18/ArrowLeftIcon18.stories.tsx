// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowLeftIcon18 from './ArrowLeftIcon18';

export default {
  title: 'Icons/18pt/ArrowLeftIcon18',
  component: ArrowLeftIcon18,
} as ComponentMeta<typeof ArrowLeftIcon18>;

const Template: ComponentStory<typeof ArrowLeftIcon18> = (args) => <ArrowLeftIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
