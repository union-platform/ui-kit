// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CameraIcon from './CameraIcon';

export default {
  title: 'Icons/CameraIcon',
  component: CameraIcon,
} as ComponentMeta<typeof CameraIcon>;

const Template: ComponentStory<typeof CameraIcon> = (args) => <CameraIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
