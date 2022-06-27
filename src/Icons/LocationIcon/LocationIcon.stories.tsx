// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LocationIcon from './LocationIcon';

export default {
  title: 'Icons/LocationIcon',
  component: LocationIcon,
} as ComponentMeta<typeof LocationIcon>;

const Template: ComponentStory<typeof LocationIcon> = (args) => <LocationIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
