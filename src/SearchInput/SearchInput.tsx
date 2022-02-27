// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserIcon from '../Icons/24pt/UserIcon24/UserIcon24';

import IconButton from './IconButton';

export default {
  title: 'Union-UI/Buttons/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = () => (
  <IconButton>
    <UserIcon purposeLabel="User Icon" />
  </IconButton>
);

export const Primary = Template.bind({});
Primary.args = {};
