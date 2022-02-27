// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CallIcon24 from './CallIcon24';

export default {
  title: 'Icons/24pt/CallIcon24',
  component: CallIcon24,
} as ComponentMeta<typeof CallIcon24>;

const Template: ComponentStory<typeof CallIcon24> = (args) => <CallIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
