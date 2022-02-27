// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CloseIcon18 from './CloseIcon18';

export default {
  title: 'Icons/18pt/CloseIcon18',
  component: CloseIcon18,
} as ComponentMeta<typeof CloseIcon18>;

const Template: ComponentStory<typeof CloseIcon18> = (args) => <CloseIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
