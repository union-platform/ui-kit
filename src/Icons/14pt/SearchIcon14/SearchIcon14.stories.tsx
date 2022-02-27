// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchIcon14 from './SearchIcon14';

export default {
  title: 'Icons/14pt/SearchIcon14',
  component: SearchIcon14,
} as ComponentMeta<typeof SearchIcon14>;

const Template: ComponentStory<typeof SearchIcon14> = () => <SearchIcon14 />;

export const Primary = Template.bind({});
Primary.args = {};
