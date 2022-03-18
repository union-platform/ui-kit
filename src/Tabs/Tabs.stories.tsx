/* eslint-disable react/jsx-props-no-spreading */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from './Tabs';
import TabsList from './TabsList/TabsList';
import TabsTrigger from './TabsTrigger/TabsTrigger';

export default {
  title: 'Union-UI/Tabs',
  component: Tabs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4729%3A34961',
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabsList ariaLabel="Manage your account">
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
  </Tabs>
);

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'tab1',
};
