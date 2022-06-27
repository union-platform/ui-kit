// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnmuteIcon from './UnmuteIcon';

export default {
  title: 'Icons/UnmuteIcon',
  component: UnmuteIcon,
} as ComponentMeta<typeof UnmuteIcon>;

const Template: ComponentStory<typeof UnmuteIcon> = (args) => <UnmuteIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
