// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CloseIcon from './CloseIcon';

export default {
  title: 'Icons/CloseIcon',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>;

const Template: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
