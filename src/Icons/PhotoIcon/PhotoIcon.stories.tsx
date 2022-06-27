// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PhotoIcon from './PhotoIcon';

export default {
  title: 'Icons/PhotoIcon',
  component: PhotoIcon,
} as ComponentMeta<typeof PhotoIcon>;

const Template: ComponentStory<typeof PhotoIcon> = (args) => <PhotoIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
