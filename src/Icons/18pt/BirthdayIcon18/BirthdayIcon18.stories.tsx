// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import BirthdayIcon18 from './BirthdayIcon18';

export default {
  title: 'Icons/18pt/BirthdayIcon18',
  component: BirthdayIcon18,
} as ComponentMeta<typeof BirthdayIcon18>;

const Template: ComponentStory<typeof BirthdayIcon18> = (args) => <BirthdayIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
