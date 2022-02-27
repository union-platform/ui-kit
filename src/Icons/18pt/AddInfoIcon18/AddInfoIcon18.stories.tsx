// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddInfoIcon18 from './AddInfoIcon18';

export default {
  title: 'Icons/18pt/AddInfoIcon18',
  component: AddInfoIcon18,
} as ComponentMeta<typeof AddInfoIcon18>;

const Template: ComponentStory<typeof AddInfoIcon18> = (args) => <AddInfoIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
