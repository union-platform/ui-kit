// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import LocationIcon14 from './LocationIcon14';

export default {
  title: 'Icons/14pt/LocationIcon14',
  component: LocationIcon14,
} as ComponentMeta<typeof LocationIcon14>;

const Template: ComponentStory<typeof LocationIcon14> = (args) => <LocationIcon14 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
