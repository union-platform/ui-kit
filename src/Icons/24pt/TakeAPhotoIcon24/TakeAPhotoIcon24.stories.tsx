// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TakeAPhotoIcon24 from './TakeAPhotoIcon24';

export default {
  title: 'Icons/24pt/TakeAPhotoIcon24',
  component: TakeAPhotoIcon24,
} as ComponentMeta<typeof TakeAPhotoIcon24>;

const Template: ComponentStory<typeof TakeAPhotoIcon24> = (args) => <TakeAPhotoIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
