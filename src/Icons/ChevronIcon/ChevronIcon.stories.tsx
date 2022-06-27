// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChevronIcon from './ChevronIcon';

export default {
  title: 'Icons/ChevronIcon',
  component: ChevronIcon,
} as ComponentMeta<typeof ChevronIcon>;

const Template: ComponentStory<typeof ChevronIcon> = (args) => <ChevronIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
