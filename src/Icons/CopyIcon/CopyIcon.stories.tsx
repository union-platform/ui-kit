// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CopyIcon from './CopyIcon';

export default {
  title: 'Icons/CopyIcon',
  component: CopyIcon,
} as ComponentMeta<typeof CopyIcon>;

const Template: ComponentStory<typeof CopyIcon> = (args) => <CopyIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
