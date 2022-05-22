// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { AnimatePresence, motion } from 'framer-motion';
import CheckIcon14 from '../Icons/14pt/CheckIcon14/CheckIcon14';
import { BrandColors } from '..';
import GrayShades from '../Colors/GrayShades/GrayShades';

export interface CheckboxProps {
  /**
   *  The checked state of the checkbox when it is initially rendered.
   *  Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean;
  /**
   *  The controlled checked state of the checkbox.
   *  Must be used in conjunction with onCheckedChange.
   */
  checked?: boolean;
  /**
   *  Area label for indicator of the checkbox. Used by screenreaders.
   */
  indicatorAreaLabel?: string;
  /**
   *  When true, prevents the user from interacting with the checkbox.
   */
  disabled?: boolean;
  /**
   *  Label, which be placed next to checkbox.
   */
  label?: string;
  /**
   *  I18y, label for check icon. Default — "Check Icon"
   */
  checkIconPurposeLabel?: string;
  /**
   *  Optional click handler
   */
  onClick?: () => void;
  /**
   *  Optional check handler
   */
  onCheckedChange?: () => void;
}

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'transparent',
  border: `1.5px solid ${GrayShades.darkGray}`,
  width: 17,
  height: 17,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&[data-state="checked"]': { borderColor: BrandColors.yellowGreen },
  '&:focus': { boxShadow: `'0 0 0 2px ${BrandColors.transparentGreen1}'` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  display: 'flex',
});

const Flex = styled(motion.div, { display: 'flex', alignItems: 'center' });

const Label = styled('div', {
  color: GrayShades.dark,
  fontSize: 14,
  lineHeight: 1,
  fontFamily: 'Open Sans, sans-serif',
  userSelect: 'none',
});

/**
 *  Form component, every checkbox in group can be checked, but in group of radio buttons only one.
 */
const Checkbox = ({
  label, defaultChecked, checked, onClick, disabled,
  onCheckedChange, indicatorAreaLabel, checkIconPurposeLabel,
  ...props
}: CheckboxProps) => (
  <AnimatePresence>
    <Flex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledCheckbox
        defaultChecked={defaultChecked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        checked={checked}
        onClick={onClick}
        {...props}
      >
        <StyledIndicator data-testid="checkbox-indicator">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              style={{ display: 'flex' }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckIcon14 fill={BrandColors.yellowGreen} purposeLabel={checkIconPurposeLabel} />
            </motion.div>
          </AnimatePresence>
        </StyledIndicator>
      </StyledCheckbox>
      {label && (
      <Label css={{ paddingLeft: 15 }}>
        {label}
      </Label>
      )}
    </Flex>
  </AnimatePresence>
);

Checkbox.defaultProps = {
  onClick: null,
  onCheckedChange: null,
  disabled: undefined,
  label: null,
  indicatorAreaLabel: null,
  checkIconPurposeLabel: 'Check Icon',
  defaultChecked: false,
  checked: undefined,
};

export default Checkbox;
