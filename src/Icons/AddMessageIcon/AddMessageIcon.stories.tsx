// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddMessageIcon from './AddMessageIcon';

export default {
  title: 'Icons/AddMessageIcon',
  component: AddMessageIcon,
} as ComponentMeta<typeof AddMessageIcon>;

const Template: ComponentStory<typeof AddMessageIcon> = (args) => <AddMessageIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
