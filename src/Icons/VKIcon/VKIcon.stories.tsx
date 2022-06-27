// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import VKIcon from './VKIcon';

export default {
  title: 'Icons/VKIcon',
  component: VKIcon,
} as ComponentMeta<typeof VKIcon>;

const Template: ComponentStory<typeof VKIcon> = (args) => <VKIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
