// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnmuteIcon24 from './UnmuteIcon24';

export default {
  title: 'Icons/24pt/UnmuteIcon24',
  component: UnmuteIcon24,
} as ComponentMeta<typeof UnmuteIcon24>;

const Template: ComponentStory<typeof UnmuteIcon24> = (args) => <UnmuteIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
