// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import BellIcon24 from './BellIcon24';

export default {
  title: 'Icons/24pt/BellIcon24',
  component: BellIcon24,
} as ComponentMeta<typeof BellIcon24>;

const Template: ComponentStory<typeof BellIcon24> = (args) => <BellIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
