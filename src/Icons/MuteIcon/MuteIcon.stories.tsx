// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MuteIcon from './MuteIcon';

export default {
  title: 'Icons/MuteIcon',
  component: MuteIcon,
} as ComponentMeta<typeof MuteIcon>;

const Template: ComponentStory<typeof MuteIcon> = (args) => <MuteIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
