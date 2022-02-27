// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlusIcon14 from './PlusIcon14';

export default {
  title: 'Icons/14pt/PlusIcon14',
  component: PlusIcon14,
} as ComponentMeta<typeof PlusIcon14>;

const Template: ComponentStory<typeof PlusIcon14> = (args) => <PlusIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
