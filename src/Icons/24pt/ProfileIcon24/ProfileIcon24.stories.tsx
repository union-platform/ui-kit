// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileIcon24 from './ProfileIcon24';

export default {
  title: 'Icons/24pt/ProfileIcon24',
  component: ProfileIcon24,
} as ComponentMeta<typeof ProfileIcon24>;

const Template: ComponentStory<typeof ProfileIcon24> = (args) => <ProfileIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
