// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ForwardIcon from './ForwardIcon';

export default {
  title: 'Icons/ForwardIcon',
  component: ForwardIcon,
} as ComponentMeta<typeof ForwardIcon>;

const Template: ComponentStory<typeof ForwardIcon> = (args) => <ForwardIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
