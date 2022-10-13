// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { CSSProperties, ReactNode } from 'react';
import { Trigger } from '@radix-ui/react-dropdown-menu';
import { styled } from '@stitches/react';

export interface DropdownTriggerProps {
  /**
   *  This will merge the original component props with the props
   *  of the supplied element/component and change the underlying DOM node.
   *  Usefull for example whe you using button tag as a trigger.
   *  So no nested button tags would be created
   */
   asChild?: boolean;
  /**
   *  CSS style properties passed to the component
   */
   style?: CSSProperties;
  /**
   *  Component which will be trigger the Dropdown to open.
   */
   children?: ReactNode;
}

const StyledTrigger = styled(Trigger, {
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
});

/**
 *  Trigger component, which opens the Dropdown.
 */
const DropdownTrigger = ({
  children, style, asChild, ...props
}: DropdownTriggerProps) => (
  <StyledTrigger asChild={asChild} style={style} {...props}>
    {children}
  </StyledTrigger>
);

DropdownTrigger.defaultProps = {
  children: undefined,
  asChild: undefined,
  style: undefined,
};

export default DropdownTrigger;
