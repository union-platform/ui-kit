// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import BrandColors from '../Colors/BrandColors/BrandColors';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';
import PlusIcon from '../Icons/PlusIcon/PlusIcon';
import Switch from '../Switch/Switch';
import Heading3 from '../Typography/Heading3/Heading3';
import ContextMenu from './ContextMenu';
import ContextMenuContent from './ContextMenuContent/ContextMenuContent';
import ContextMenuItem from './ContextMenuItem/ContextMenuItem';
import ContextMenuTrigger from './ContextMenuTrigger/ContextMenuTrigger';

export default {
  title: 'Union-UI/ContextMenu',
  component: ContextMenu,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4807%3A0',
    },
  },
} as ComponentMeta<typeof ContextMenu>;

const Template: ComponentStory<typeof ContextMenu> = (args) => {
  const [switchSelected, setSwitchSelected] = useState(false);

  const handleSwitchClick = (e: Event) => {
    // Prevents ContextMenu from closing
    e.preventDefault();

    setSwitchSelected(!switchSelected);
  };

  return (
    <div>
      <Heading3
        css={{ marginBottom: 24 }}
      >
        Right click on Avatar, or long press on touch devices

      </Heading3>
      <ContextMenu {...args}>
        <ContextMenuTrigger>
          <Avatar
            src="https://images.unsplash.com/photo-1562293803-4a30b3b0614a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="Colm Tuite"
            size={60}
          />
        </ContextMenuTrigger>

        <ContextMenuContent sideOffset={5}>
          <ContextMenuItem iconComponent={<PlusIcon size="24px" />}>
            New Tab
          </ContextMenuItem>
          <ContextMenuItem>New Window</ContextMenuItem>
          <ContextMenuItem
            onSelect={handleSwitchClick}
            controlComponent={<Switch checked={switchSelected} />}
          >
            Item with control

          </ContextMenuItem>
          <ContextMenuItem disabled>New Private Window</ContextMenuItem>
          <ContextMenuItem negative iconComponent={<DeleteIcon size="24px" fill={BrandColors.red} />}>
            New Tab
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
