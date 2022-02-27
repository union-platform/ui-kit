// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import WaitIcon14 from './WaitIcon14';

export default {
  title: 'Icons/14pt/WaitIcon14',
  component: WaitIcon14,
} as ComponentMeta<typeof WaitIcon14>;

const Template: ComponentStory<typeof WaitIcon14> = (args) => <WaitIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
