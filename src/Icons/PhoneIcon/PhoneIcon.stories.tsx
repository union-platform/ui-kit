// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PhoneIcon from './PhoneIcon';

export default {
  title: 'Icons/PhoneIcon',
  component: PhoneIcon,
} as ComponentMeta<typeof PhoneIcon>;

const Template: ComponentStory<typeof PhoneIcon> = (args) => <PhoneIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
