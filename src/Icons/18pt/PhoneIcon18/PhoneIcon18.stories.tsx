// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PhoneIcon18 from './PhoneIcon18';

export default {
  title: 'Icons/18pt/PhoneIcon18',
  component: PhoneIcon18,
} as ComponentMeta<typeof PhoneIcon18>;

const Template: ComponentStory<typeof PhoneIcon18> = (args) => <PhoneIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
