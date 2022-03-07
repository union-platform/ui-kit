// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as LabelPrimitive from '@radix-ui/react-label';

export interface SwitchProps {
  /**
   *  The progress value.
   */
   label?: string;
  /**
   *  The controlled state of the switch.
   */
   checked?: boolean;
  /**
   *  The controlled state of the switch.
   */
   disabled?: boolean;
  /**
   *  The controlled state of the switch.
   */
   id?: string;
  /**
   *  The controlled state of the switch.
   */
   onCheckedChange?: () => {};
}

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 35,
  height: 17,
  backgroundColor: '#DCDCDC',
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: '0 0 0 2px #A5D43D' },
  '&[data-state="checked"]': { backgroundColor: '#3ADB6D82' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 17,
  height: 17,
  backgroundColor: '#959595',
  borderRadius: '9999px',
  boxShadow: 'box-shadow: 0px 1px 2px 0px #0000001C; box-shadow: 0px 0px 2px 0px #0000001F;',
  transition: 'transform 100ms',
  transform: 'translateX(1px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)', backgroundColor: '#0DBC44' },
});

const Flex = styled('div', { display: 'flex' });
const Label = styled(LabelPrimitive.Root, {
  color: 'black',
  fontSize: 14,
  lineHeight: 1,
  fontFamily: 'Open Sans, sans-serif',
  userSelect: 'none',
});

/**
 * Primary UI component for user interaction
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
