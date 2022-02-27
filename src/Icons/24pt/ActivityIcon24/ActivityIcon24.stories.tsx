// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ActivityIcon24 from './ActivityIcon24';

export default {
  title: 'Icons/24pt/ActivityIcon24',
  component: ActivityIcon24,
} as ComponentMeta<typeof ActivityIcon24>;

const Template: ComponentStory<typeof ActivityIcon24> = (args) => <ActivityIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
