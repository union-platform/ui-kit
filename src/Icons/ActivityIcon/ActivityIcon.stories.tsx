// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ActivityIcon from './ActivityIcon';

export default {
  title: 'Icons/ActivityIcon',
  component: ActivityIcon,
} as ComponentMeta<typeof ActivityIcon>;

const Template: ComponentStory<typeof ActivityIcon> = (args) => <ActivityIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
