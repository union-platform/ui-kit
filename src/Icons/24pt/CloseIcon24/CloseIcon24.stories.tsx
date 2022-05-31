// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CloseIcon24 from './CloseIcon24';

export default {
  title: 'Icons/24pt/CloseIcon24',
  component: CloseIcon24,
} as ComponentMeta<typeof CloseIcon24>;

const Template: ComponentStory<typeof CloseIcon24> = (args) => <CloseIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
