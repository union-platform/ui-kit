// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import BrandColors from '../Colors/BrandColors/BrandColors';

export interface DotProps {
  /**
   *  Size of the dot.
   */
   size?: number;
  /**
   *  Variant of the color changes color. Prop `fill` overrides this value.
   */
   variant?: 'negative' | 'positive';
  /**
   *  Color of the dot. This prop overrides value of the `variant`.
   */
   fill?: string;
}

const StyledDot = styled('span', {
  borderRadius: '100%',
  display: 'block',

  variants: {
    variant: {
      negative: {
        background: BrandColors.red,
      },
      positive: {
        background: BrandColors.darkGreen,
      },
    },
  },
});

/**
 *  Dot component, can be used as an indicator or a badge.
 */
const Dot = ({
  size, variant, fill, ...props
}: DotProps) => (
  <StyledDot variant={variant} css={{ width: size, height: size, background: fill }} {...props} />
);

Dot.defaultProps = {
  size: 8,
  fill: undefined,
  variant: 'positive',
};

export default Dot;
