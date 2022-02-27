// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchIcon24 from './SearchIcon24';

export default {
  title: 'Icons/24pt/SearchIcon24',
  component: SearchIcon24,
} as ComponentMeta<typeof SearchIcon24>;

const Template: ComponentStory<typeof SearchIcon24> = (args) => <SearchIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
