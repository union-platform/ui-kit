// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmailIcon18 from './EmailIcon18';

export default {
  title: 'Icons/18pt/EmailIcon18',
  component: EmailIcon18,
} as ComponentMeta<typeof EmailIcon18>;

const Template: ComponentStory<typeof EmailIcon18> = (args) => <EmailIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
