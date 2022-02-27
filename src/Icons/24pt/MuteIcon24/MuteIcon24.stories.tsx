// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MuteIcon24 from './MuteIcon24';

export default {
  title: 'Icons/24pt/MuteIcon24',
  component: MuteIcon24,
} as ComponentMeta<typeof MuteIcon24>;

const Template: ComponentStory<typeof MuteIcon24> = (args) => <MuteIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
