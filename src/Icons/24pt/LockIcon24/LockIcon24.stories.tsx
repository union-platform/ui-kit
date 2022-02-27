// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LockIcon24 from './LockIcon24';

export default {
  title: 'Icons/24pt/LockIcon24',
  component: LockIcon24,
} as ComponentMeta<typeof LockIcon24>;

const Template: ComponentStory<typeof LockIcon24> = (args) => <LockIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
