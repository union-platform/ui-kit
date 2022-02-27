// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ForwardIcon24 from './ForwardIcon24';

export default {
  title: 'Icons/24pt/ForwardIcon24',
  component: ForwardIcon24,
} as ComponentMeta<typeof ForwardIcon24>;

const Template: ComponentStory<typeof ForwardIcon24> = (args) => <ForwardIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
