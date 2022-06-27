// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilterIcon from './FilterIcon';

export default {
  title: 'Icons/FilterIcon',
  component: FilterIcon,
} as ComponentMeta<typeof FilterIcon>;

const Template: ComponentStory<typeof FilterIcon> = (args) => <FilterIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
