// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserIcon24 from './UserIcon24';

export default {
  title: 'Icons/24pt/UserIcon24',
  component: UserIcon24,
} as ComponentMeta<typeof UserIcon24>;

const Template: ComponentStory<typeof UserIcon24> = (args) => <UserIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
