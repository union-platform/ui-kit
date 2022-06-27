// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TakeAPhotoIcon from './TakeAPhotoIcon';

export default {
  title: 'Icons/TakeAPhotoIcon',
  component: TakeAPhotoIcon,
} as ComponentMeta<typeof TakeAPhotoIcon>;

const Template: ComponentStory<typeof TakeAPhotoIcon> = (args) => <TakeAPhotoIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
