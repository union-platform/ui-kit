// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditIcon from './EditIcon';

export default {
  title: 'Icons/EditIcon',
  component: EditIcon,
} as ComponentMeta<typeof EditIcon>;

const Template: ComponentStory<typeof EditIcon> = (args) => <EditIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
