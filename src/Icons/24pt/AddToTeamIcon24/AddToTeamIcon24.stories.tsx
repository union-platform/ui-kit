// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddToTeamIcon24 from './AddToTeamIcon24';

export default {
  title: 'Icons/24pt/AddToTeamIcon24',
  component: AddToTeamIcon24,
} as ComponentMeta<typeof AddToTeamIcon24>;

const Template: ComponentStory<typeof AddToTeamIcon24> = (args) => <AddToTeamIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
