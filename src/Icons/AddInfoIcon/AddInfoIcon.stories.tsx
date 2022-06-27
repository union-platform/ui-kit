// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddInfoIcon from './AddInfoIcon';

export default {
  title: 'Icons/AddInfoIcon',
  component: AddInfoIcon,
} as ComponentMeta<typeof AddInfoIcon>;

const Template: ComponentStory<typeof AddInfoIcon> = (args) => <AddInfoIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
