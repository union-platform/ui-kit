// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import React, {
  memo, useRef, useLayoutEffect, useEffect, useState,
} from 'react';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';

export interface SingleOTPInputProps {
  focus?: boolean;
  disabled?: boolean;
  error?: boolean;
  value?: string;
  defaultValue?: string;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

function usePrevious<T>(value?: T) {
  const ref = useRef<T>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const StyledInput = styled(motion.input, {
  width: '32px',
  height: '41px',
  marginRight: '15px',
  fontSize: '24px',
  fontWeight: '500',
  fontFamily: 'Fira Code',
  textAlign: 'center',
  border: 0,
  caretColor: BrandColors.darkGreen,
  borderRadius: 10,
  backgroundColor: GrayShades.extraLightGray,
  '&:focus': { position: 'relative', backgroundColor: BrandColors.transparentGreen1 },
  '&:focus-visible': { outline: 0 },
  variants: {
    filled: {
      true: {
        backgroundColor: BrandColors.darkGreen,
        color: GrayShades.white,
        '&:focus': { position: 'relative', backgroundColor: BrandColors.darkGreen },
      },
    },
    error: {
      true: {
        backgroundColor: BrandColors.red,
        color: GrayShades.white,
        '&:focus': { position: 'relative', backgroundColor: BrandColors.red },
      },
    },
  },
});

export function SingleOTPInputComponent({
  focus, value, disabled, onFocus, onBlur, onChange,
  onKeyDown, onPaste, error, defaultValue, ...props
}: SingleOTPInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus) {
        setFocused(true);
        inputRef.current.focus();
      }
      if (focus && focus !== prevFocus) {
        setFocused(true);
        inputRef.current.focus();
        inputRef.current.select();
      }
      if (!focus) {
        setFocused(false);
      }
    }
  }, [focus, prevFocus]);

  const animationVariants = {
    selected: { backgroundColor: BrandColors.darkGreen },
    focused: { backgroundColor: BrandColors.transparentGreen1 },
    unselected: { backgroundColor: GrayShades.extraLightGray },
  };

  const getAnimate = () => {
    if (value && value.length > 0) {
      return 'selected';
    } if (focused) {
      return 'focused';
    }
    return 'unselected';
  };

  return (
    <StyledInput
      initial={{ backgroundColor: GrayShades.extraLightGray }}
      animate={getAnimate()}
      variants={animationVariants}
      error={error}
      filled={!!(value && value.length > 0)}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      defaultValue={defaultValue}
      onFocus={onFocus}
      disabled={disabled}
      value={value}
      ref={inputRef}
      {...props}
    />
  );
}

SingleOTPInputComponent.defaultProps = {
  focus: undefined,
  disabled: undefined,
  error: undefined,
  value: undefined,
  defaultValue: undefined,
  onFocus: undefined,
  onChange: undefined,
  onKeyDown: undefined,
  onBlur: undefined,
  onPaste: undefined,
};

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
