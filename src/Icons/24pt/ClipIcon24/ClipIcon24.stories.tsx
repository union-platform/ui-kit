// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ClipIcon24 from './ClipIcon24';

export default {
  title: 'Icons/24pt/ClipIcon24',
  component: ClipIcon24,
} as ComponentMeta<typeof ClipIcon24>;

const Template: ComponentStory<typeof ClipIcon24> = (args) => <ClipIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
