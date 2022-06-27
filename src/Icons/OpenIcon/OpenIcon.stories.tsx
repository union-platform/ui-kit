// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import OpenIcon from './OpenIcon';

export default {
  title: 'Icons/OpenIcon',
  component: OpenIcon,
} as ComponentMeta<typeof OpenIcon>;

const Template: ComponentStory<typeof OpenIcon> = (args) => <OpenIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
