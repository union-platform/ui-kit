// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import CheckIcon14 from '../Icons/14pt/CheckIcon14/CheckIcon14';
import { BrandColors } from '..';

export interface CheckboxProps {
  /**
   *  Variant of button
   */
  defaultChecked?: boolean;
  /**
   *  Variant of button
   */
  checked?: boolean;
  /**
   *  Variant of button
   */
  checkboxAreaLabel?: string;
  /**
   *  Variant of button
   */
  indicatorAreaLabel?: string;
  /**
   *  Variant of button
   */
  disabled?: boolean;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Button contents
   */
  id?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional click handler
   */
  onCheckedChange?: () => void;
}

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'transparent',
  border: '1.5px solid #959595',
  width: 17,
  height: 17,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&[data-state="checked"]': { borderColor: '#A5D43D' },
  '&:focus': { boxShadow: '0 0 0 2px #A5D43D' },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: 'green',
  display: 'flex',
});

const Flex = styled('div', { display: 'flex', alignItems: 'center' });

const Label = styled('div', {
  color: 'black',
  fontSize: 14,
  lineHeight: 1,
  fontFamily: 'Open Sans, sans-serif',
  userSelect: 'none',
});

/**
 * Primary UI component for user interaction
 */
const Checkbox = ({
  label, defaultChecked, id, checked, onClick, disabled,
  onCheckedChange, checkboxAreaLabel, indicatorAreaLabel,
}: CheckboxProps) => (
  <Flex>
    <StyledCheckbox
      defaultChecked={defaultChecked}
      id={id}
      aria-label={checkboxAreaLabel}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      checked={checked}
      onClick={onClick}
    >
      <StyledIndicator data-testid={indicatorAreaLabel}>
        <CheckIcon14 fill={BrandColors.yellowGreen} purposeLabel="Check Icon" />
      </StyledIndicator>
    </StyledCheckbox>
    {label && (
    <Label css={{ paddingLeft: 15 }}>
      {label}
    </Label>
    )}
  </Flex>
);

Checkbox.defaultProps = {
  onClick: null,
  onCheckedChange: null,
  disabled: null,
  label: null,
  checkboxAreaLabel: null,
  indicatorAreaLabel: null,
  id: null,
  defaultChecked: false,
  checked: undefined,
};

export default Checkbox;
