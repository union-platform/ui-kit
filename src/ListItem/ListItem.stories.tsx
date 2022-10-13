// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button/Button';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';
import Dropdown from '../Dropdown/Dropdown';
import DropdownContent from '../Dropdown/DropdownContent/DropdownContent';
import DropdownItem from '../Dropdown/DropdownItem/DropdownItem';
import DropdownTrigger from '../Dropdown/DropdownTrigger/DropdownTrigger';
import {
  CompetencyMapIcon, DeleteIcon, PlusIcon,
} from '../icons';
import { styled } from '../stitches.config';
import Switch from '../Switch/Switch';
import Text from '../Typography/Text/Text';

import ListItem from './ListItem';

export default {
  title: 'Union-UI/ListItem',
  component: ListItem,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4840%3A37662',
    },
  },
} as ComponentMeta<typeof ListItem>;

const List = styled('div', {
  display: 'flex',
  width: 344,
  height: 600,
  padding: 16,
  border: `1px solid ${GrayShades.lightGray}`,
  borderRadius: '14px',
  flexDirection: 'column',
});

const XpText = styled(Text, {
  color: BrandColors.yellowGreen,
  userSelect: 'auto',
});

interface CellButtonWithDropdownProps {
  cellButtonSelected: boolean,
  setCellButtonSelected: (_a: boolean) => void;
}

const CellButtonWithDropdown = ({
  cellButtonSelected,
  setCellButtonSelected,
}: CellButtonWithDropdownProps) => {
  const [switchSelected, setSwitchSelected] = useState(false);

  const handleSwitchClick = (e: Event) => {
    // Prevents dropdown from closing
    e.preventDefault();

    setSwitchSelected(!switchSelected);
  };

  return (
    <Dropdown
      open={cellButtonSelected}
      onOpenChange={() => setCellButtonSelected(!cellButtonSelected)}
    >
      <DropdownTrigger>
        <Text css={{ color: BrandColors.darkGreen }} weight="bold">Change</Text>
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

interface ListItemExampleProps {
  callback: any,
}

// eslint-disable-next-line react/prop-types
export const ListItemExample = ({ callback }: ListItemExampleProps) => {
  const [switchSelected, setSwitchSelected] = useState(false);
  const [cellButtonSelected, setCellButtonSelected] = useState(false);

  return (
    <List>
      <ListItem data-testid="listItem-1" onClick={callback !== undefined ? (() => callback()) : (() => setSwitchSelected(!switchSelected))} title="Make everyone happy" description="If turned on, everyone are happy" rightControl={<Switch checked={switchSelected} />} />
      <ListItem title="Name" description="Will be displayed everywhere" rightControl={<XpText>+25xp</XpText>} />
      <ListItem title="Unselectable ListItem without right control!" description="Just to test unselectable element" />
      <ListItem onClick={() => setCellButtonSelected(!cellButtonSelected)} title="Your private pictures" description="Photos that you store in your device" rightControl={<CellButtonWithDropdown cellButtonSelected={cellButtonSelected} setCellButtonSelected={setCellButtonSelected} />} />
      <ListItem leftControl={<CompetencyMapIcon size="24px" fill={BrandColors.darkGreen} />} title="ListItem with left icon!" description="Testing description" />
      <ListItem onClick={() => {}} leftControl={<Button variant="text" negative>Delete my profile</Button>} />
    </List>
  );
};

export const Primary = ListItemExample.bind({});
