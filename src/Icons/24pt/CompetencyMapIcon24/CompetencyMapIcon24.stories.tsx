// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CompetencyMapIcon24 from './CompetencyMapIcon24';

export default {
  title: 'Icons/24pt/CompetencyMapIcon24',
  component: CompetencyMapIcon24,
} as ComponentMeta<typeof CompetencyMapIcon24>;

const Template: ComponentStory<typeof CompetencyMapIcon24> = (args) => (
  <CompetencyMapIcon24 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  fill: '#000000',
};
