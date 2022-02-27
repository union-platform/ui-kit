// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import OpenIcon24 from './OpenIcon24';

export default {
  title: 'Icons/24pt/OpenIcon24',
  component: OpenIcon24,
} as ComponentMeta<typeof OpenIcon24>;

const Template: ComponentStory<typeof OpenIcon24> = (args) => <OpenIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
