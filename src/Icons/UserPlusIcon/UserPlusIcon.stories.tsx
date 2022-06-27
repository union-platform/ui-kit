// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserPlusIcon from './UserPlusIcon';

export default {
  title: 'Icons/UserPlusIcon',
  component: UserPlusIcon,
} as ComponentMeta<typeof UserPlusIcon>;

const Template: ComponentStory<typeof UserPlusIcon> = (args) => <UserPlusIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
