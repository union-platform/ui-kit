// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CameraIcon24 from './CameraIcon24';

export default {
  title: 'Icons/24pt/CameraIcon24',
  component: CameraIcon24,
} as ComponentMeta<typeof CameraIcon24>;

const Template: ComponentStory<typeof CameraIcon24> = (args) => <CameraIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
