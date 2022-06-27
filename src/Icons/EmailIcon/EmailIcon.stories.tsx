// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmailIcon from './EmailIcon';

export default {
  title: 'Icons/EmailIcon',
  component: EmailIcon,
} as ComponentMeta<typeof EmailIcon>;

const Template: ComponentStory<typeof EmailIcon> = (args) => <EmailIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
