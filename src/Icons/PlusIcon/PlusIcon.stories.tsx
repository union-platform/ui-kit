// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlusIcon from './PlusIcon';

export default {
  title: 'Icons/PlusIcon',
  component: PlusIcon,
} as ComponentMeta<typeof PlusIcon>;

const Template: ComponentStory<typeof PlusIcon> = (args) => <PlusIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
