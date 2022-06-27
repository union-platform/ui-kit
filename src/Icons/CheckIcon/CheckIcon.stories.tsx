// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckIcon from './CheckIcon';

export default {
  title: 'Icons/CheckIcon',
  component: CheckIcon,
} as ComponentMeta<typeof CheckIcon>;

const Template: ComponentStory<typeof CheckIcon> = (args) => <CheckIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
