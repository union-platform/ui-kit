// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserIcon from '../Icons/24pt/UserIcon24/UserIcon24';
import CellButton from './CellButton';

export default {
  title: 'Union-UI/Buttons/CellButton',
  component: CellButton,
} as ComponentMeta<typeof CellButton>;

const Template: ComponentStory<typeof CellButton> = (args) => (
  <CellButton {...args}>
    <UserIcon fill="#0DBC44" />
  </CellButton>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Long button with icon',
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Long button with icon',
  iconRight: true,
};
