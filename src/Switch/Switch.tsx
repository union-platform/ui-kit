// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as LabelPrimitive from '@radix-ui/react-label';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';

export interface SwitchProps {
  /**
   *  Label, which be placed next to the input.
   */
   label?: string;
 /**
   *  The controlled checked state of the switch.
   *  Must be used in conjunction with onCheckedChange.
   */
   checked?: boolean;
  /**
   *  When true, prevents the user from interacting with the switch.
   */
   disabled?: boolean;
  /**
   *  The id attribute of the switch.
   */
   id?: string;
  /**
   *  Optional check handler
   */
   onCheckedChange?: () => {};
}

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 35,
  height: 17,
  backgroundColor: GrayShades.lightGray,
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px ${BrandColors.transparentGreen1}` },
  '&[data-state="checked"]': { backgroundColor: BrandColors.transparentGreen2 },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 17,
  height: 17,
  backgroundColor: GrayShades.darkGray,
  borderRadius: '9999px',
  boxShadow: 'box-shadow: 0px 1px 2px 0px #0000001C; box-shadow: 0px 0px 2px 0px #0000001F;',
  transition: 'transform 100ms',
  transform: 'translateX(1px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)', backgroundColor: BrandColors.darkGreen },
});

const Flex = styled('div', { display: 'flex' });
const Label = styled(LabelPrimitive.Root, {
  color: GrayShades.dark,
  fontSize: 14,
  lineHeight: 1,
  fontFamily: 'Open Sans, sans-serif',
  userSelect: 'none',
});

/**
 *  UI component to toggle between checked and not checked.
 */
const Switch = ({
  label, checked, disabled, id, onCheckedChange, ...props
}: SwitchProps) => (
  <Flex css={{ alignItems: 'center' }}>
    <StyledSwitch
      aria-label="Switch"
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      checked={checked}
      defaultChecked
      id={id}
      {...props}
    >
      <StyledThumb />
    </StyledSwitch>
    {label && (
    <Label htmlFor={id} css={{ paddingLeft: 15 }}>
      Airplane mode
    </Label>
    )}
  </Flex>
);

Switch.defaultProps = {
  disabled: false,
  id: undefined,
  onCheckedChange: undefined,
  checked: undefined,
  label: undefined,
};

export default Switch;
