// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import EnvelopeIcon from './EnvelopeIcon';

export default {
  title: 'Icons/EnvelopeIcon',
  component: EnvelopeIcon,
} as ComponentMeta<typeof EnvelopeIcon>;

const Template: ComponentStory<typeof EnvelopeIcon> = (args) => <EnvelopeIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
