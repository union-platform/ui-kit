// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import BlockIcon from './BlockIcon';

export default {
  title: 'Icons/BlockIcon',
  component: BlockIcon,
} as ComponentMeta<typeof BlockIcon>;

const Template: ComponentStory<typeof BlockIcon> = (args) => <BlockIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
