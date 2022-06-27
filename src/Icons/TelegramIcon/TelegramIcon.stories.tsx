// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TelegramIcon from './TelegramIcon';

export default {
  title: 'Icons/TelegramIcon',
  component: TelegramIcon,
} as ComponentMeta<typeof TelegramIcon>;

const Template: ComponentStory<typeof TelegramIcon> = (args) => <TelegramIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
