// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import OpenProfileIcon24 from './OpenProfileIcon24';

export default {
  title: 'Icons/24pt/OpenProfileIcon24',
  component: OpenProfileIcon24,
} as ComponentMeta<typeof OpenProfileIcon24>;

const Template: ComponentStory<typeof OpenProfileIcon24> = (args) => (
  <OpenProfileIcon24
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
