// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export interface LinearProgressProps {
  /**
   *  The progress value.
   */
   value: number;
  /**
   *  Value of progress indicator
   */
   progress: number;
  /**
   *  The maximum progress value.
   */
   max: number;
}

const StyledProgress = styled(ProgressPrimitive.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '#C4C4C4',
  borderRadius: '99999px',
  width: 100,
  height: 6,
});

const StyledIndicator = styled(ProgressPrimitive.Indicator, {
  backgroundColor: '#0DBC44',
  height: '100%',
  transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

/**
 *  Progress indicator of any task, so that user knows that system is processing.
 */
const LinearProgress = ({ value, progress, max }: LinearProgressProps) => (
  <StyledProgress aria-label={`Progress ${progress}%`} max={max} value={value}>
    <StyledIndicator style={{ width: `${progress}%` }} />
  </StyledProgress>
);

export default LinearProgress;
