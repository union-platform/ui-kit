// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
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
  userSelect: 'none',
  padding: '0 6px 0 6px',
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
}: CounterProps) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    if (typeof value === 'number' && value !== 0) {
      setTimer(0, value);
    }
  }, []);

  const setTimer = (minimum: number, maximum: number) => {
    for (let count = minimum; count <= maximum; count += 1) {
      setTimeout(() => {
        setAnimatedNumber(count);
      }, 1000);
    }
  };

  return (
    ((typeof value === 'number' && value !== 0)
  || ((typeof value === 'number' && value >= 0) && showZero))
      ? (
        <StyledCounter negative={negative} {...props}>
          <StyledHeading>
            {animatedNumber}
          </StyledHeading>
        </StyledCounter>
      ) : <div />
  );
};
Counter.defaultProps = {
  showZero: false,
  negative: undefined,
  value: undefined,
};

export default Counter;
