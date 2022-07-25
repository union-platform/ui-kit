// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Content } from '@radix-ui/react-context-menu';
import { keyframes, styled } from '@stitches/react';
import { CSSProperties, ReactNode } from 'react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface ContextMenuContentProps {
  /**
   *  The distance in pixels from the trigger.
   */
   sideOffset?: number;
  /**
   *  CSS style properties passed to the component
   */
   style?: CSSProperties;
  /**
   *  Content of the ContextMenu
   */
   children?: ReactNode;
}

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(Content, {
  minWidth: 220,
  backgroundColor: GrayShades.white,
  borderRadius: 4,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

/**
 *  Content of the Context Menu
 */
const ContextMenuContent = ({
  children, sideOffset, style, ...props
}: ContextMenuContentProps) => (
  <StyledContent style={style} loop sideOffset={sideOffset} {...props}>
    {children}
  </StyledContent>
);

ContextMenuContent.defaultProps = {
  children: undefined,
  style: undefined,
  sideOffset: 8,
};

export default ContextMenuContent;
