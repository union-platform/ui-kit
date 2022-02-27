// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChevronIcon14 from './ChevronIcon14';

export default {
  title: 'Icons/14pt/ChevronIcon14',
  component: ChevronIcon14,
} as ComponentMeta<typeof ChevronIcon14>;

const Template: ComponentStory<typeof ChevronIcon14> = (args) => <ChevronIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
