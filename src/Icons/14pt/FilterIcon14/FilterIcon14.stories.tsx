// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterIcon14 from './FilterIcon14';

export default {
  title: 'Icons/14pt/FilterIcon14',
  component: FilterIcon14,
} as ComponentMeta<typeof FilterIcon14>;

const Template: ComponentStory<typeof FilterIcon14> = (args) => <FilterIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
