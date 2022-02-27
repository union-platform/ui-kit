// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CopyIcon24 from './CopyIcon24';

export default {
  title: 'Icons/24pt/CopyIcon24',
  component: CopyIcon24,
} as ComponentMeta<typeof CopyIcon24>;

const Template: ComponentStory<typeof CopyIcon24> = (args) => <CopyIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
