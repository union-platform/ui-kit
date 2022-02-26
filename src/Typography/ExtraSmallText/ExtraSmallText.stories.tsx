// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExtraSmallText from './ExtraSmallText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/ExtraSmallText',
  component: ExtraSmallText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ExtraSmallText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ExtraSmallText> = (args) => (
  <ExtraSmallText {...args}>
    Extra small text
  </ExtraSmallText>
);

export const ExtraSmallTextRegular = Template.bind({});
ExtraSmallTextRegular.args = {};
