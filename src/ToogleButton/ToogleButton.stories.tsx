// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading4 from '../Typography/Heading4/Heading4';
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
  <div style={{ display: 'inline-grid', gap: '18px' }}>
    <Heading4>Choose the meal:</Heading4>
    <div style={{ display: 'inline-grid', gap: '12px', gridAutoFlow: 'row' }}>
      <div style={{ display: 'inline-grid', gap: '12px', gridAutoFlow: 'column' }}>
        <ToogleButton {...args}>
          🍪 Cookie
        </ToogleButton>
        <ToogleButton {...args}>
          🧁 Cake
        </ToogleButton>
        <ToogleButton {...args}>
          🍌 Banana
        </ToogleButton>
      </div>
      <div style={{ display: 'inline-grid', gap: '12px', gridAutoFlow: 'column' }}>
        <ToogleButton {...args}>
          🍎 Apple
        </ToogleButton>
        <ToogleButton {...args}>
          🍳 Eggs
        </ToogleButton>
        <ToogleButton {...args}>
          🥪 Sandwich
        </ToogleButton>
      </div>
    </div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
