// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CloseInfoIcon18 from './CloseInfoIcon18';

export default {
  title: 'Icons/18pt/CloseInfoIcon18',
  component: CloseInfoIcon18,
} as ComponentMeta<typeof CloseInfoIcon18>;

const Template: ComponentStory<typeof CloseInfoIcon18> = (args) => <CloseInfoIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
