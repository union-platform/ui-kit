// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoreInfoIcon18 from './MoreInfoIcon18';

export default {
  title: 'Icons/18pt/MoreInfoIcon18',
  component: MoreInfoIcon18,
} as ComponentMeta<typeof MoreInfoIcon18>;

const Template: ComponentStory<typeof MoreInfoIcon18> = (args) => <MoreInfoIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
