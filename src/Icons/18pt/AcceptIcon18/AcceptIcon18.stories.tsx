// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AcceptIcon18 from './AcceptIcon18';

export default {
  title: 'Icons/18pt/AcceptIcon18',
  component: AcceptIcon18,
} as ComponentMeta<typeof AcceptIcon18>;

const Template: ComponentStory<typeof AcceptIcon18> = (args) => <AcceptIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
