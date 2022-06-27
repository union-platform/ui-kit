// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportIcon from './ReportIcon';

export default {
  title: 'Icons/ReportIcon',
  component: ReportIcon,
} as ComponentMeta<typeof ReportIcon>;

const Template: ComponentStory<typeof ReportIcon> = (args) => <ReportIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
