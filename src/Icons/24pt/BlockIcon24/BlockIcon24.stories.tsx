// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlockIcon24 from './BlockIcon24';

export default {
  title: 'Icons/24pt/BlockIcon24',
  component: BlockIcon24,
} as ComponentMeta<typeof BlockIcon24>;

const Template: ComponentStory<typeof BlockIcon24> = (args) => <BlockIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
