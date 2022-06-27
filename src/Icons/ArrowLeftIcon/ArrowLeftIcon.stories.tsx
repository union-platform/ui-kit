// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowLeftIcon from './ArrowLeftIcon';

export default {
  title: 'Icons/ArrowLeftIcon',
  component: ArrowLeftIcon,
} as ComponentMeta<typeof ArrowLeftIcon>;

const Template: ComponentStory<typeof ArrowLeftIcon> = (args) => <ArrowLeftIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
