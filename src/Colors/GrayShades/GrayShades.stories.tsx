// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

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

export default {
  title: 'Colors/GrayShades',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = () => (
  <Container>
    {Object.keys(GrayShades)
      .map((val: string) => (
        <Flex>
          <Box
            id={val}
            style={{ background: GrayShades[val as keyof typeof GrayShades] }}
          />
          <Heading4>{val}</Heading4>
        </Flex>
      ))}
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {};
