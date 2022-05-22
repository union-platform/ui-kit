// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { AnimatePresence, motion } from 'framer-motion';
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

const StyledDot = styled(motion.span, {
  borderRadius: '100%',
  display: 'block',
  alignSelf: 'center',

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
  <AnimatePresence>
    <StyledDot
      variant={variant}
      initial={{
        opacity: 0, width: 0, height: 0, y: 4,
      }}
      animate={{
        opacity: 1, width: size, height: size, y: 0,
      }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -4 }}
      css={{ width: size, height: size, background: fill }}
      {...props}
    />
  </AnimatePresence>
);

Dot.defaultProps = {
  size: 8,
  fill: undefined,
  variant: 'positive',
};

export default Dot;
