// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShareIcon24 from './ShareIcon24';

export default {
  title: 'Icons/24pt/ShareIcon24',
  component: ShareIcon24,
} as ComponentMeta<typeof ShareIcon24>;

const Template: ComponentStory<typeof ShareIcon24> = (args) => <ShareIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
