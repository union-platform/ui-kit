// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmailIcon14 from './EmailIcon14';

export default {
  title: 'Icons/14pt/EmailIcon14',
  component: EmailIcon14,
} as ComponentMeta<typeof EmailIcon14>;

const Template: ComponentStory<typeof EmailIcon14> = (args) => <EmailIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
