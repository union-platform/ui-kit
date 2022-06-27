// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LockIcon from './LockIcon';

export default {
  title: 'Icons/LockIcon',
  component: LockIcon,
} as ComponentMeta<typeof LockIcon>;

const Template: ComponentStory<typeof LockIcon> = (args) => <LockIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
