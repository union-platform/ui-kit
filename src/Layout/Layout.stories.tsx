// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GrayShades from '../Colors/GrayShades/GrayShades';
import SearchInput from '../SearchInput/SearchInput';
import Layout from './Layout';

const MobileScreen = styled('div', {
  width: 320,
  height: 400,
  background: GrayShades.lightGray,
});

export default {
  title: 'Union-UI/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <MobileScreen>
    <Layout {...args}>
      <SearchInput id="Testing Search" onChange={() => {}} fullWidth />
    </Layout>
  </MobileScreen>
);

export const Primary = Template.bind({});
Primary.args = {};
