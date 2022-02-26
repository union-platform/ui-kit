// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/* eslint-disable no-console */

import { ComponentStory, ComponentMeta } from '@storybook/react';

import OTPInput from './OTPInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Union-UI/Fields/OTPInput',
  component: OTPInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OTPInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof OTPInput> = (args) => <OTPInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  length: 4,
  onChangeOTP: (otp) => console.log('Number OTP: ', otp),
};

export const MoreThanFour = Template.bind({});
MoreThanFour.args = {
  length: 6,
  onChangeOTP: (otp) => console.log('Number OTP: ', otp),
};

export const Error = Template.bind({});
Error.args = {
  length: 4,
  error: true,
  defaultValue: '3',
  onChangeOTP: (otp) => console.log('Number OTP: ', otp),
};
