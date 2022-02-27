// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MutedIcon24 from './MutedIcon24';

export default {
  title: 'Icons/24pt/MutedIcon24',
  component: MutedIcon24,
} as ComponentMeta<typeof MutedIcon24>;

const Template: ComponentStory<typeof MutedIcon24> = (args) => <MutedIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
