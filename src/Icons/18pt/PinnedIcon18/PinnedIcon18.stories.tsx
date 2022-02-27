// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PinnedIcon18 from './PinnedIcon18';

export default {
  title: 'Icons/18pt/PinnedIcon18',
  component: PinnedIcon18,
} as ComponentMeta<typeof PinnedIcon18>;

const Template: ComponentStory<typeof PinnedIcon18> = (args) => <PinnedIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
