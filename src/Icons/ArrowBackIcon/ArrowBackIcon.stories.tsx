// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowBackIcon from './ArrowBackIcon';

export default {
  title: 'Icons/ArrowBackIcon',
  component: ArrowBackIcon,
} as ComponentMeta<typeof ArrowBackIcon>;

const Template: ComponentStory<typeof ArrowBackIcon> = (args) => <ArrowBackIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
