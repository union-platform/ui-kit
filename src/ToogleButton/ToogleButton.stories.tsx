// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToogleButton from './ToogleButton';

export default {
  title: 'Union-UI/Buttons/ToogleButton',
  component: ToogleButton,
} as ComponentMeta<typeof ToogleButton>;

const Template: ComponentStory<typeof ToogleButton> = (args) => (
  <ToogleButton {...args}>
    Selection Button
  </ToogleButton>
);

export const Primary = Template.bind({});
Primary.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
