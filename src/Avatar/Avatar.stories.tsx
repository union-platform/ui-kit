// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'Union-UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://images.unsplash.com/photo-1562293803-4a30b3b0614a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  alt: 'Colm Tuite',
  size: 60,
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  fallbackValue: 'AD',
  size: 60,
};

export const WithActiveBadge = Template.bind({});
WithActiveBadge.args = {
  src: 'https://images.unsplash.com/photo-1562293803-4a30b3b0614a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  alt: 'Colm Tuite',
  fallbackValue: 'AD',
  activeBadgeSize: 8,
  size: 24,
  active: true,
};
