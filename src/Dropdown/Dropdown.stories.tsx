// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';
import EllipsisIcon from '../Icons/EllipsisIcon/EllipsisIcon';
import PlusIcon from '../Icons/PlusIcon/PlusIcon';
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
        <EllipsisIcon size="18px" fill={GrayShades.navigationGray} />
      </DropdownTrigger>

      <DropdownContent sideOffset={5}>
        <DropdownItem iconComponent={<PlusIcon size="24px" />}>
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
        <DropdownItem negative iconComponent={<DeleteIcon size="24px" fill={BrandColors.red} />}>
          New Tab
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
