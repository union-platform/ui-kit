// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PinnedIcon from './PinnedIcon';

export default {
  title: 'Icons/PinnedIcon',
  component: PinnedIcon,
} as ComponentMeta<typeof PinnedIcon>;

const Template: ComponentStory<typeof PinnedIcon> = (args) => <PinnedIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
