// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MoreInfoIcon from './MoreInfoIcon';

export default {
  title: 'Icons/MoreInfoIcon',
  component: MoreInfoIcon,
} as ComponentMeta<typeof MoreInfoIcon>;

const Template: ComponentStory<typeof MoreInfoIcon> = (args) => <MoreInfoIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
