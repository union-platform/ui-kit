// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToogleButton from './ToogleButton';

export default {
  title: 'Union-UI/ToogleButton',
  component: ToogleButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4840%3A36630',
    },
  },
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
