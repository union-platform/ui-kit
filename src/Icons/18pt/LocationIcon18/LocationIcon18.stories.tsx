// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LocationIcon18 from './LocationIcon18';

export default {
  title: 'Icons/18pt/LocationIcon18',
  component: LocationIcon18,
} as ComponentMeta<typeof LocationIcon18>;

const Template: ComponentStory<typeof LocationIcon18> = (args) => <LocationIcon18 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
