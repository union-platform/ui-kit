// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddToTeamIcon from './AddToTeamIcon';

export default {
  title: 'Icons/AddToTeamIcon',
  component: AddToTeamIcon,
} as ComponentMeta<typeof AddToTeamIcon>;

const Template: ComponentStory<typeof AddToTeamIcon> = (args) => <AddToTeamIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
