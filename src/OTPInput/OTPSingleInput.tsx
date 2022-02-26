// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { styled } from '@stitches/react';
import React, {
  memo, useRef, useLayoutEffect, useEffect,
} from 'react';

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

const StyledInput = styled('input', {
  width: '32px',
  height: '41px',
  marginRight: '15px',
  fontSize: '24px',
  textAlign: 'center',
  border: 0,
  borderRadius: 10,
  backgroundColor: '#F2F2F2',
  '&:focus': { position: 'relative', backgroundColor: '#0DBC4433' },
  '&:focus-visible': { outline: 0 },
  variants: {
    filled: {
      true: {
        backgroundColor: '#0DBC44',
        color: '#ffffff',
        '&:focus': { position: 'relative', backgroundColor: '#0DBC44' },
      },
    },
    error: {
      true: {
        backgroundColor: '#DD4A29',
        color: '#ffffff',
        '&:focus': { position: 'relative', backgroundColor: '#DD4A29' },
      },
    },
  },
});

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
  const {
    focus, value, disabled, onFocus, onBlur, onChange, onKeyDown, onPaste, error, defaultValue,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus) {
        inputRef.current.focus();
      }
      if (focus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [focus, prevFocus]);

  return (
    <StyledInput
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
    />
  );
}

SingleOTPInputComponent.defaultProps = {
  focus: null,
  disabled: null,
  error: null,
  value: null,
  defaultValue: null,
  onFocus: null,
  onChange: null,
  onKeyDown: null,
  onBlur: null,
  onPaste: null,
};

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
