// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginIcon24 from './LoginIcon24';

export default {
  title: 'Icons/24pt/LoginIcon24',
  component: LoginIcon24,
} as ComponentMeta<typeof LoginIcon24>;

const Template: ComponentStory<typeof LoginIcon24> = (args) => <LoginIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
