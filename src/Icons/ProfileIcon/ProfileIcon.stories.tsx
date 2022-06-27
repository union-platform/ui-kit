// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileIcon from './ProfileIcon';

export default {
  title: 'Icons/ProfileIcon',
  component: ProfileIcon,
} as ComponentMeta<typeof ProfileIcon>;

const Template: ComponentStory<typeof ProfileIcon> = (args) => <ProfileIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
