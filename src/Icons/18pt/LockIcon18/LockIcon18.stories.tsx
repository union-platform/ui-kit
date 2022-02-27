// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LockIcon18 from './LockIcon18';

export default {
  title: 'Icons/18pt/LockIcon18',
  component: LockIcon18,
} as ComponentMeta<typeof LockIcon18>;

const Template: ComponentStory<typeof LockIcon18> = (args) => <LockIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
