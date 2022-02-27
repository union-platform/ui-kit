// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddToProjectIcon24 from './AddToProjectIcon24';

export default {
  title: 'Icons/24pt/AddToProjectIcon24',
  component: AddToProjectIcon24,
} as ComponentMeta<typeof AddToProjectIcon24>;

const Template: ComponentStory<typeof AddToProjectIcon24> = (args) => (
  <AddToProjectIcon24
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
