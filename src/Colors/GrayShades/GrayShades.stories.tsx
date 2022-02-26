// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@stitches/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading4 from '../../Typography/Heading4/Heading4';
import GrayShades from './GrayShades';

const Box = styled('div', {
  width: '50px',
  height: '50px',
  marginRight: 12,
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Colors/GrayShades',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = () => (
  <Container>
    {Object.keys(GrayShades)
      .map((val: string) => (
        <Flex>
          <Box
            id={val}
            style={{ background: GrayShades[val] }}
          />
          <Heading4>{val}</Heading4>
        </Flex>
      ))}
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {};
