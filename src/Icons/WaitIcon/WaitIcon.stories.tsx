// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import WaitIcon from './WaitIcon';

export default {
  title: 'Icons/WaitIcon',
  component: WaitIcon,
} as ComponentMeta<typeof WaitIcon>;

const Template: ComponentStory<typeof WaitIcon> = (args) => <WaitIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
