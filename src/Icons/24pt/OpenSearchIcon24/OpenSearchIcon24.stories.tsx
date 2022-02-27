// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import OpenSearchIcon24 from './OpenSearchIcon24';

export default {
  title: 'Icons/24pt/OpenSearchIcon24',
  component: OpenSearchIcon24,
} as ComponentMeta<typeof OpenSearchIcon24>;

const Template: ComponentStory<typeof OpenSearchIcon24> = (args) => <OpenSearchIcon24 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
