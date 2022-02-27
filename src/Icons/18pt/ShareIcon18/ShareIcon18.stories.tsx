// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShareIcon18 from './ShareIcon18';

export default {
  title: 'Icons/18pt/ShareIcon18',
  component: ShareIcon18,
} as ComponentMeta<typeof ShareIcon18>;

const Template: ComponentStory<typeof ShareIcon18> = (args) => <ShareIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
