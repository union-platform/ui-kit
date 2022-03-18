// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserIcon24 from '../Icons/24pt/UserIcon24/UserIcon24';
import IconButton from './IconButton';

export default {
  title: 'Union-UI/IconButton',
  component: IconButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4687%3A34346',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = () => (
  <IconButton>
    <UserIcon24 purposeLabel="User Icon" />
  </IconButton>
);

export const Primary = Template.bind({});
Primary.args = {};
