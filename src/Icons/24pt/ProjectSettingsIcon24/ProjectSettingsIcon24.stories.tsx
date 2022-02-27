// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectSettingsIcon24 from './ProjectSettingsIcon24';

export default {
  title: 'Icons/24pt/ProjectSettingsIcon24',
  component: ProjectSettingsIcon24,
} as ComponentMeta<typeof ProjectSettingsIcon24>;

const Template: ComponentStory<typeof ProjectSettingsIcon24> = (args) => (
  <ProjectSettingsIcon24 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
