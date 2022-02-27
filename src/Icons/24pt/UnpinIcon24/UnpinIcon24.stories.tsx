// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UnpinIcon24 from './UnpinIcon24';

export default {
  title: 'Icons/24pt/UnpinIcon24',
  component: UnpinIcon24,
} as ComponentMeta<typeof UnpinIcon24>;

const Template: ComponentStory<typeof UnpinIcon24> = (args) => <UnpinIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
