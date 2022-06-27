// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import DoubleCheckIcon from './DoubleCheckIcon';

export default {
  title: 'Icons/DoubleCheckIcon',
  component: DoubleCheckIcon,
} as ComponentMeta<typeof DoubleCheckIcon>;

const Template: ComponentStory<typeof DoubleCheckIcon> = (args) => <DoubleCheckIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
