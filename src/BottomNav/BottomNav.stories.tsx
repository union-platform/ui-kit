// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ActivityIcon from '../Icons/ActivityIcon/ActivityIcon';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';
import ProfileIcon from '../Icons/ProfileIcon/ProfileIcon';
import MessagesIcon from '../Icons/MessagesIcon/MessagesIcon';

import BottomNav from './BottomNav';
import BottomNavItem from './BottomNavItem/BottomNavItem';

export default {
  title: 'Union-UI/BottomNav',
  component: BottomNav,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4840%3A37662',
    },
  },
} as ComponentMeta<typeof BottomNav>;

const Template: ComponentStory<typeof BottomNav> = (args) => {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <BottomNav {...args}>
      <BottomNavItem
        borders="start"
        onClick={() => setIsSelected(0)}
        label="Search"
        isSelected={isSelected === 0}
        setIcon={({ fill, size, purposeLabel }) => (
          <SearchIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
      <BottomNavItem
        borders="full"
        onClick={() => setIsSelected(1)}
        label="Messages"
        isSelected={isSelected === 1}
        setIcon={({ fill, size, purposeLabel }) => (
          <MessagesIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
      <BottomNavItem
        borders="full"
        onClick={() => setIsSelected(2)}
        isSelected={isSelected === 2}
        setIcon={({ fill, size, purposeLabel }) => (
          <ProfileIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
      <BottomNavItem
        borders="end"
        onClick={() => setIsSelected(3)}
        label="Activity"
        isSelected={isSelected === 3}
        setIcon={({ fill, size, purposeLabel }) => (
          <ActivityIcon
            purposeLabel={purposeLabel}
            fill={fill}
            size={size}
          />
        )}
      />
    </BottomNav>
  );
};

export const Primary = Template.bind({});
Primary.args = {

};
