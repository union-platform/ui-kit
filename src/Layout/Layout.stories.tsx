// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Union-UI/Layout',
  component: Layout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Layout> = (args) => (
  <MobileScreen>
    <Layout {...args}>
      <SearchInput id="Testing Search" onChange={() => {}} fullWidth />
    </Layout>
  </MobileScreen>
);

export const Primary = Template.bind({});
Primary.args = {

};
