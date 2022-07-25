// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { CSSProperties, ReactNode } from 'react';
import { Trigger } from '@radix-ui/react-context-menu';
import { styled } from '@stitches/react';
import GrayShades from '../../Colors/GrayShades/GrayShades';

export interface ContextMenuTriggerProps {
  /**
   *  CSS style properties passed to the component
   */
   style?: CSSProperties;
  /**
   *  Component which will be trigger the ContextMenu to open.
   */
   children?: ReactNode;
}

const StyledTrigger = styled(Trigger, {
  border: 0,
  background: GrayShades.white,
  cursor: 'pointer',
});

/**
 *  Trigger component, which opens the ContextMenu.
 */
const ContextMenuTrigger = ({
  children, style, ...props
}: ContextMenuTriggerProps) => (
  <StyledTrigger style={style} {...props}>
    {children}
  </StyledTrigger>
);

ContextMenuTrigger.defaultProps = {
  children: undefined,
  style: undefined,
};

export default ContextMenuTrigger;
