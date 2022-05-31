// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import GrayShades from '../Colors/GrayShades/GrayShades';
import { AddToProjectIcon24, ClipIcon24, ProfileIcon24 } from '../icons';
import AddToTeamIcon24 from '../Icons/24pt/AddToTeamIcon24/AddToTeamIcon24';

import FAB from './FAB';
import FABSubButton from './FABSubButton/FABSubButton';

export default {
  title: 'Union-UI/FAB',
  component: FAB,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4687%3A34346',
    },
  },
} as ComponentMeta<typeof FAB>;

const Template: ComponentStory<typeof FAB> = (args) => (
  <div>
    <FAB {...args}>
      <FABSubButton label="Add to Team" icon={<AddToTeamIcon24 fill={GrayShades.white} />} />
      <FABSubButton label="Add to Project" icon={<AddToProjectIcon24 fill={GrayShades.white} />} />
      <FABSubButton icon={<ClipIcon24 fill={GrayShades.white} />} />
      <FABSubButton label="Something" />
    </FAB>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
};

export const CustomIcon: ComponentStory<typeof FAB> = (args) => (
  <div>
    <FAB data-testid="fab" {...args} customIcon={<ProfileIcon24 fill="#ffffff" />}>
      <FABSubButton label="Add to Team" icon={<AddToTeamIcon24 fill={GrayShades.white} />} />
      <FABSubButton label="Add to Project" icon={<AddToProjectIcon24 fill={GrayShades.white} />} />
      <FABSubButton icon={<ClipIcon24 fill={GrayShades.white} />} />
      <FABSubButton label="Something" />
    </FAB>
  </div>
);
CustomIcon.args = {
};

export const NotExpandingOnClick: ComponentStory<typeof FAB> = (args) => (
  <div>
    <FAB {...args} customIcon={<ProfileIcon24 fill="#ffffff" />} />
  </div>
);
CustomIcon.args = {
};
