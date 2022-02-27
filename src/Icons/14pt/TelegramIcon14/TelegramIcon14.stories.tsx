// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TelegramIcon14 from './TelegramIcon14';

export default {
  title: 'Icons/14pt/TelegramIcon14',
  component: TelegramIcon14,
} as ComponentMeta<typeof TelegramIcon14>;

const Template: ComponentStory<typeof TelegramIcon14> = (args) => <TelegramIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
