// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PhotoIcon24 from './PhotoIcon24';

export default {
  title: 'Icons/24pt/PhotoIcon24',
  component: PhotoIcon24,
} as ComponentMeta<typeof PhotoIcon24>;

const Template: ComponentStory<typeof PhotoIcon24> = (args) => <PhotoIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
