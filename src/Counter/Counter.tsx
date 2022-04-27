// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';
import Heading5 from '../Typography/Heading5/Heading5';

export interface CounterProps {
  /**
   *  Value of the badge, if `undefined`, badge will not be rendered.
   */
   value?: number;
  /**
   *  If true, shows 0 when value equals zero.
   */
   showZero?: boolean;
  /**
   *  Negative, error state, which changes color of the badge.
   */
   negative?: boolean;
}

const StyledCounter = styled('span', {
  height: 24,
  display: 'inline-block',
  padding: '0 8px 0 8px',
  borderRadius: 100,
  background: BrandColors.darkGreen,

  variants: {
    negative: {
      true: {
        background: BrandColors.red,
      },
    },
  },
});

const StyledHeading = styled(Heading5, {
  color: GrayShades.white,
  lineHeight: '24px',
  textAlign: 'center',
});

/**
 *  Counter badge, can be use to show number of new messages or notifications.
 */
const Counter = ({
  value, negative, showZero, ...props
}: CounterProps) => (
  ((typeof value === 'number' && value !== 0)
  || ((typeof value === 'number' && value >= 0) && showZero))
    ? (
      <StyledCounter negative={negative} {...props}>
        <StyledHeading>
          {value}
        </StyledHeading>
      </StyledCounter>
    ) : <div />
);
Counter.defaultProps = {
  showZero: false,
  negative: undefined,
  value: undefined,
};

export default Counter;
