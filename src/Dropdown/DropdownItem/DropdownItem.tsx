// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { CSSProperties, ReactNode } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import BrandColors from '../../Colors/BrandColors/BrandColors';
import GrayShades from '../../Colors/GrayShades/GrayShades';
import Text from '../../Typography/Text/Text';

export interface DropdownItemProps {
  /**
   *  When `true`, prevents the user from interacting with the item.
   */
   disabled?: boolean;
  /**
   *  Event handler called when the user selects an item (via mouse of keyboard).
   *  Calling event.preventDefault in this handler will prevent the dropdown
   *  menu from closing when selecting that item.
   */
   // eslint-disable-next-line no-unused-vars
   onSelect?: (event: Event) => void;
  /**
   *  Allows to add additional control component, like `Switch`.
   */
   controlComponent?: ReactNode;
  /**
   *  When `true`, makes text red.
   */
   negative?: boolean;
  /**
   *  Allows to add additional icon. You need to color it by yourself.
   */
   iconComponent?: ReactNode;
  /**
   *  CSS style properties passed to the component
   */
   style?: CSSProperties;
  /**
   *  Text value of the item.
   */
   children?: ReactNode;
}

const StyledText = styled(Text, {
  display: 'flex',
  alignItems: 'center',

  variants: {
    leftMargin: {
      true: {
        marginLeft: 8,
      },
    },
  },
});

const RightControl = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
});

const StyledItem = styled(DropdownMenuPrimitive.Item, {
  all: 'unset',
  lineHeight: 1,
  color: GrayShades.dark,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 43,
  borderBottom: '1px solid #eee',
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 12,
  userSelect: 'none',

  variants: {
    negative: {
      true: {
        color: BrandColors.red,
      },
    },
  },

  '&[data-disabled]': {
    color: GrayShades.lightGray,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: BrandColors.transparentGreen1,
  },
});

/**
 *  Single item component of the Dropdown.
 */
const DropdownItem = ({
  children, disabled, negative, style, iconComponent, onSelect, controlComponent, ...props
}: DropdownItemProps) => (
  <StyledItem style={style} onSelect={onSelect} negative={negative} disabled={disabled} {...props}>
    {iconComponent}
    <StyledText leftMargin={!!iconComponent} weight="regular">
      {children}
    </StyledText>
    <RightControl>
      {controlComponent}
    </RightControl>
  </StyledItem>
);

DropdownItem.defaultProps = {
  children: undefined,
  iconComponent: undefined,
  disabled: undefined,
  negative: undefined,
  onSelect: undefined,
  style: undefined,
  controlComponent: undefined,
};

export default DropdownItem;
