// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArrowBackIcon24 from './ArrowBackIcon24';

export default {
  title: 'Icons/24pt/ArrowBackIcon24',
  component: ArrowBackIcon24,
} as ComponentMeta<typeof ArrowBackIcon24>;

const Template: ComponentStory<typeof ArrowBackIcon24> = (args) => <ArrowBackIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
