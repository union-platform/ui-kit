// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';
import { AddIcon24, DeleteIcon24 } from '../icons';
import EllipsisIcon18 from '../Icons/18pt/EllipsisIcon18/EllipsisIcon18';
import Switch from '../Switch/Switch';
import Dropdown from './Dropdown';
import DropdownContent from './DropdownContent/DropdownContent';
import DropdownItem from './DropdownItem/DropdownItem';
import DropdownTrigger from './DropdownTrigger/DropdownTrigger';

export default {
  title: 'Union-UI/Dropdown',
  component: Dropdown,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4807%3A0',
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [switchSelected, setSwitchSelected] = useState(false);

  const handleSwitchClick = (e: Event) => {
    // Prevents dropdown from closing
    e.preventDefault();

    setSwitchSelected(!switchSelected);
  };

  return (
    <Dropdown {...args}>
      <DropdownTrigger>
        <EllipsisIcon18 fill={GrayShades.navigationGray} />
      </DropdownTrigger>

      <DropdownContent sideOffset={5}>
        <DropdownItem iconComponent={<AddIcon24 />}>
          New Tab
        </DropdownItem>
        <DropdownItem>New Window</DropdownItem>
        <DropdownItem
          onSelect={handleSwitchClick}
          controlComponent={<Switch checked={switchSelected} />}
        >
          Item with control

        </DropdownItem>
        <DropdownItem disabled>New Private Window</DropdownItem>
        <DropdownItem negative iconComponent={<DeleteIcon24 fill={BrandColors.red} />}>
          New Tab
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
