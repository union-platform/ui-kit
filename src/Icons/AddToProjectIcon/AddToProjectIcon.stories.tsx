// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddToProjectIcon from './AddToProjectIcon';

export default {
  title: 'Icons/AddToProjectIcon',
  component: AddToProjectIcon,
} as ComponentMeta<typeof AddToProjectIcon>;

const Template: ComponentStory<typeof AddToProjectIcon> = (args) => (
  <AddToProjectIcon
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
