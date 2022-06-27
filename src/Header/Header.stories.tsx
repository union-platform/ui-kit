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
import EllipsisIcon from '../Icons/EllipsisIcon/EllipsisIcon';
import Dropdown from '../Dropdown/Dropdown';
import DropdownTrigger from '../Dropdown/DropdownTrigger/DropdownTrigger';
import DropdownContent from '../Dropdown/DropdownContent/DropdownContent';
import DropdownItem from '../Dropdown/DropdownItem/DropdownItem';
import Switch from '../Switch/Switch';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';
import BrandColors from '../Colors/BrandColors/BrandColors';
import AddIcon from '../Icons/PlusIcon/PlusIcon';

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

const MenuButton = () => (
  <Dropdown>
    <DropdownTrigger>
      <EllipsisIcon size="18px" />
    </DropdownTrigger>

    <DropdownContent sideOffset={5}>
      <DropdownItem iconComponent={<AddIcon size="24px" />}>
        New Tab
      </DropdownItem>
      <DropdownItem>New Window</DropdownItem>
      <DropdownItem
        controlComponent={<Switch />}
      >
        Item with control

      </DropdownItem>
      <DropdownItem disabled>New Private Window</DropdownItem>
      <DropdownItem negative iconComponent={<DeleteIcon size="24px" fill={BrandColors.red} />}>
        New Tab
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
);

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
      iconComponent={<MenuButton />}
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
