// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnpinIcon from './UnpinIcon';

export default {
  title: 'Icons/UnpinIcon',
  component: UnpinIcon,
} as ComponentMeta<typeof UnpinIcon>;

const Template: ComponentStory<typeof UnpinIcon> = (args) => <UnpinIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
