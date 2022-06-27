// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ClipIcon from './ClipIcon';

export default {
  title: 'Icons/ClipIcon',
  component: ClipIcon,
} as ComponentMeta<typeof ClipIcon>;

const Template: ComponentStory<typeof ClipIcon> = (args) => <ClipIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
