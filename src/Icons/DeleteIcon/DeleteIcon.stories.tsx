// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon from './DeleteIcon';

export default {
  title: 'Icons/DeleteIcon',
  component: DeleteIcon,
} as ComponentMeta<typeof DeleteIcon>;

const Template: ComponentStory<typeof DeleteIcon> = (args) => <DeleteIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
