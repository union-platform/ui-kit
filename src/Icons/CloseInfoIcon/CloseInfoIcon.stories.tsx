// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CloseInfoIcon from './CloseInfoIcon';

export default {
  title: 'Icons/CloseInfoIcon',
  component: CloseInfoIcon,
} as ComponentMeta<typeof CloseInfoIcon>;

const Template: ComponentStory<typeof CloseInfoIcon> = (args) => <CloseInfoIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
