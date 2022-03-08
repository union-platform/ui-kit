// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>Text</Text>;

export const TextRegular = Template.bind({});
TextRegular.args = {
  weight: 'regular',
};

export const TextBold = Template.bind({});
TextBold.args = {
  weight: 'bold',
};

export const TextLight = Template.bind({});
TextLight.args = {
  weight: 'light',
};
