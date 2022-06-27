// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import DownloadIcon from './DownloadIcon';

export default {
  title: 'Icons/DownloadIcon',
  component: DownloadIcon,
} as ComponentMeta<typeof DownloadIcon>;

const Template: ComponentStory<typeof DownloadIcon> = (args) => <DownloadIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
