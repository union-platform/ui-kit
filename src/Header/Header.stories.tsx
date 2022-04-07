// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Layout from '../Layout/Layout';
import Header from './Header';
import Tabs from '../Tabs/Tabs';
import TabsList from '../Tabs/TabsList/TabsList';
import TabsTrigger from '../Tabs/TabsTrigger/TabsTrigger';
import EllipsisIcon18 from '../Icons/18pt/EllipsisIcon18/EllipsisIcon18';

const styles = {
  height: '100000px',
};

export default {
  title: 'Union-UI/Header',
  component: Header,
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4729%3A34872',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Layout>
    <Header
      showTabs
      tabsComponent={(
        <Tabs defaultValue="tab1">
          <TabsList ariaLabel="Manage your account">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            <TabsTrigger value="tab4">Tab 4</TabsTrigger>
          </TabsList>
        </Tabs>
)}
      iconComponent={<EllipsisIcon18 />}
      backLink="/"
      searchProps={{ placeholder: 'Placeholder...' }}
      {...args}
    />
  </Layout>
);

export const Mobile = Template.bind({});
Mobile.args = {
};

export const Tablet = Template.bind({});
Tablet.args = {
};
Tablet.parameters = {
  viewport: {
    defaultViewport: 'ipad',
  },
};

export const FullSize = Template.bind({});
FullSize.args = {
};
FullSize.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};
