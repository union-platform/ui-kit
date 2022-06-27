// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectSettingsIcon from './ProjectSettingsIcon';

export default {
  title: 'Icons/ProjectSettingsIcon',
  component: ProjectSettingsIcon,
} as ComponentMeta<typeof ProjectSettingsIcon>;

const Template: ComponentStory<typeof ProjectSettingsIcon> = (args) => (
  <ProjectSettingsIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
