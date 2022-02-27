// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReadIcon14 from './ReadIcon14';

export default {
  title: 'Icons/14pt/ReadIcon14',
  component: ReadIcon14,
} as ComponentMeta<typeof ReadIcon14>;

const Template: ComponentStory<typeof ReadIcon14> = (args) => <ReadIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
