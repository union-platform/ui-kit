// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditIcon24 from './EditIcon24';

export default {
  title: 'Icons/24pt/EditIcon24',
  component: EditIcon24,
} as ComponentMeta<typeof EditIcon24>;

const Template: ComponentStory<typeof EditIcon24> = (args) => <EditIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
