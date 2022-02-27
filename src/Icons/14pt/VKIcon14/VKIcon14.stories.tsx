// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import VKIcon14 from './VKIcon14';

export default {
  title: 'Icons/14pt/VKIcon14',
  component: VKIcon14,
} as ComponentMeta<typeof VKIcon14>;

const Template: ComponentStory<typeof VKIcon14> = (args) => <VKIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
