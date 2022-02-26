/* eslint-disable react/jsx-props-no-spreading */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserIcon from '../Icons/UserIcon/UserIcon';

import CellButton from './CellButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Union-UI/Buttons/CellButton',
  component: CellButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CellButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CellButton> = (args) => (
  <CellButton {...args}>
    <UserIcon fill="#0DBC44" />
  </CellButton>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Long button with icon',
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Long button with icon',
  iconRight: true,
};
