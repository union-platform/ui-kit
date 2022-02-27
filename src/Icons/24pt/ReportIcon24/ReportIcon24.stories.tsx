// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportIcon24 from './ReportIcon24';

export default {
  title: 'Icons/24pt/ReportIcon24',
  component: ReportIcon24,
} as ComponentMeta<typeof ReportIcon24>;

const Template: ComponentStory<typeof ReportIcon24> = (args) => <ReportIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
