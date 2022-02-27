// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeleteIcon24 from './DeleteIcon24';

export default {
  title: 'Icons/24pt/DeleteIcon24',
  component: DeleteIcon24,
} as ComponentMeta<typeof DeleteIcon24>;

const Template: ComponentStory<typeof DeleteIcon24> = (args) => <DeleteIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
