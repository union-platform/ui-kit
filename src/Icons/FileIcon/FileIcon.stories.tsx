// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileIcon from './FileIcon';

export default {
  title: 'Icons/FileIcon',
  component: FileIcon,
} as ComponentMeta<typeof FileIcon>;

const Template: ComponentStory<typeof FileIcon> = (args) => <FileIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
