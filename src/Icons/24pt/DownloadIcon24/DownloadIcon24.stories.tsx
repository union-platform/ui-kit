// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import DownloadIcon24 from './DownloadIcon24';

export default {
  title: 'Icons/24pt/DownloadIcon24',
  component: DownloadIcon24,
} as ComponentMeta<typeof DownloadIcon24>;

const Template: ComponentStory<typeof DownloadIcon24> = (args) => <DownloadIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
