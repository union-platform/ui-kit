// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileIcon24 from './FileIcon24';

export default {
  title: 'Icons/24pt/FileIcon24',
  component: FileIcon24,
} as ComponentMeta<typeof FileIcon24>;

const Template: ComponentStory<typeof FileIcon24> = (args) => <FileIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
