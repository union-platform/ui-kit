/* eslint-disable react/jsx-props-no-spreading */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserPlusIcon } from '../icons';

import CellButton from './CellButton';

export default {
  title: 'Union-UI/CellButton',
  component: CellButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4734%3A584',
    },
  },
} as ComponentMeta<typeof CellButton>;

const Template: ComponentStory<typeof CellButton> = (args) => (
  <CellButton {...args}>
    <UserPlusIcon size="24px" fill="#0DBC44" />
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
