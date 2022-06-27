// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EllipsisIcon from './EllipsisIcon';

export default {
  title: 'Icons/EllipsisIcon',
  component: EllipsisIcon,
} as ComponentMeta<typeof EllipsisIcon>;

const Template: ComponentStory<typeof EllipsisIcon> = (args) => <EllipsisIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
