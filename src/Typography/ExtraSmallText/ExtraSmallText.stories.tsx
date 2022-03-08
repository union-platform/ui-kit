// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExtraSmallText from './ExtraSmallText';

export default {
  title: 'Typography/ExtraSmallText',
  component: ExtraSmallText,
} as ComponentMeta<typeof ExtraSmallText>;

const Template: ComponentStory<typeof ExtraSmallText> = (args) => (
  <ExtraSmallText {...args}>
    Extra small text
  </ExtraSmallText>
);

export const ExtraSmallTextRegular = Template.bind({});
ExtraSmallTextRegular.args = {};
