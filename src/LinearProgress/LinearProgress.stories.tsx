// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinearProgress from './LinearProgress';

export default {
  title: 'Union-UI/LinearProgress',
  component: LinearProgress,
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (args) => <LinearProgress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  progress: 23,
  value: 70,
  max: 100,
};
