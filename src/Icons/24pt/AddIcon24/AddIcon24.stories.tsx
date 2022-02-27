// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddIcon24 from './AddIcon24';

export default {
  title: 'Icons/24pt/AddIcon24',
  component: AddIcon24,
} as ComponentMeta<typeof AddIcon24>;

const Template: ComponentStory<typeof AddIcon24> = (args) => <AddIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
