// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CompetencyMapIcon from './CompetencyMapIcon';

export default {
  title: 'Icons/CompetencyMapIcon',
  component: CompetencyMapIcon,
} as ComponentMeta<typeof CompetencyMapIcon>;

const Template: ComponentStory<typeof CompetencyMapIcon> = (args) => (
  <CompetencyMapIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
