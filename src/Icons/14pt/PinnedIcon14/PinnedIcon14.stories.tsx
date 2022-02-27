// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PinnedIcon14 from './PinnedIcon14';

export default {
  title: 'Icons/14pt/PinnedIcon14',
  component: PinnedIcon14,
} as ComponentMeta<typeof PinnedIcon14>;

const Template: ComponentStory<typeof PinnedIcon14> = (args) => <PinnedIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
