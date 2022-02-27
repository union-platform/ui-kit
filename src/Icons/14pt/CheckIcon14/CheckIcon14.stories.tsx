// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckIcon14 from './CheckIcon14';

export default {
  title: 'Icons/14pt/CheckIcon14',
  component: CheckIcon14,
} as ComponentMeta<typeof CheckIcon14>;

const Template: ComponentStory<typeof CheckIcon14> = (args) => <CheckIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
