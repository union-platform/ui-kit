// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';

import OTPInput from './OTPInput';

export default {
  title: 'Union-UI/Fields/OTPInput',
  component: OTPInput,
} as ComponentMeta<typeof OTPInput>;

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
