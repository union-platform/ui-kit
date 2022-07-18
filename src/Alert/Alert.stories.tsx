// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button/Button';

import Alert from './Alert';
import AlertAction from './AlertAction/AlertAction';
import AlertCancel from './AlertCancel/AlertCancel';
import AlertContent from './AlertContent/AlertContent';
import AlertDescription from './AlertDescription/AlertDescription';
import AlertTitle from './AlertTitle/AlertTitle';
import AlertTrigger from './AlertTrigger/AlertTrigger';

export default {
  title: 'Union-UI/Alert',
  component: Alert,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2St3zSul4fHnLffqy3WK7P/%5B-union-%5D-mobile?node-id=4840%3A37103',
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>
    <AlertTrigger><Button variant="primary">Press</Button></AlertTrigger>
    <AlertContent>
      <AlertTitle>Are you absolutely sure?</AlertTitle>
      <AlertDescription>
        This action cannot be undone. This will permanently delete your account and remove your data
        from our servers.
      </AlertDescription>
      <AlertCancel><Button variant="text">Cancel</Button></AlertCancel>
      <AlertAction><Button negative variant="primary">Yes, delete account</Button></AlertAction>
    </AlertContent>
  </Alert>
);

export const Primary = Template.bind({});
Primary.args = {
};
