// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchIcon from './SearchIcon';

export default {
  title: 'Icons/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = (args) => <SearchIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
