// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import CheckIcon from '../Icons/14pt/CheckIcon14/CheckIcon14';
import BrandColors from '../Colors/BrandColors/Brand';

export interface CheckboxProps {
  /**
   *  Variant of button
   */
  defaultChecked: boolean;
  /**
   *  Variant of button
   */
  checked: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Button contents
   */
  id: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
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
  '&[data-state="checked"]': { borderColor: BrandColors.yellowGreen },
  '&:focus': { boxShadow: `0 0 0 2px ${BrandColors.yellowGreen}` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: 'green',
  display: 'flex',
});

const Flex = styled('div', { display: 'flex', alignItems: 'center' });

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
const Checkbox = ({
  // eslint-disable-next-line no-unused-vars
  label, defaultChecked, id, checked, onClick,
}: CheckboxProps) => (
  <Flex>
    <StyledCheckbox
      defaultChecked={defaultChecked}
      id={id}
      checked={checked}
      onClick={onClick}
    >
      <StyledIndicator>
        <CheckIcon fill={BrandColors.yellowGreen} purposeLabel="Check Icon" />
      </StyledIndicator>
    </StyledCheckbox>
    {label && (
    <Label css={{ paddingLeft: 15 }} htmlFor={id}>
      {label}
    </Label>
    )}
  </Flex>
);

Checkbox.defaultProps = {
  onClick: () => {},
};

export default Checkbox;
