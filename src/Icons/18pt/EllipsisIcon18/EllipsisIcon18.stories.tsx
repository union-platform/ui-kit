// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EllipsisIcon18 from './EllipsisIcon18';

export default {
  title: 'Icons/18pt/EllipsisIcon18',
  component: EllipsisIcon18,
} as ComponentMeta<typeof EllipsisIcon18>;

const Template: ComponentStory<typeof EllipsisIcon18> = (args) => <EllipsisIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
