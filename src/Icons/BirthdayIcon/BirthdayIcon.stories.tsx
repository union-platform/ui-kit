// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import BirthdayIcon from './BirthdayIcon';

export default {
  title: 'Icons/BirthdayIcon',
  component: BirthdayIcon,
} as ComponentMeta<typeof BirthdayIcon>;

const Template: ComponentStory<typeof BirthdayIcon> = (args) => <BirthdayIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
