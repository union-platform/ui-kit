// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/* eslint-disable no-unused-vars */
import { styled } from '@stitches/react';
import React, {
  memo, useState, useCallback, CSSProperties,
} from 'react';
import SingleInput from './OTPSingleInput';

export interface OTPInputProps {
  /**
   *  The number of inputs for OTP.
   */
  length: number;
  /**
   *  Input change handler.
  */
 onChangeOTP: (otp: string) => any;
  /**
   *  When true, prevents the user from interacting with the input.
  */
 disabled?: boolean;
  /**
   *  The default state of the input when it is initially rendered.
   *  Use when you do not need to control its state.
  */
 defaultValue?: string;
  /**
  *  I18y, label for single input, will look like this — <label>-<index>
  */
 singleInputAriaLabel?: string;
  /**
  *  When true, input visually indicates that user made an error.
  */
 error?: boolean;
 /**
 *   CSS styles for input
 */
  style?: CSSProperties;
}

const InputContainer = styled('div', {
  margin: '5% auto',
});

export function OTPInputComponent(props: OTPInputProps) {
  const {
    length,
    error,
    disabled,
    onChangeOTP,
    defaultValue,
    singleInputAriaLabel,
    ...rest
  } = props;

  const [activeInput, setActiveInput] = useState(0);
  const [otpValues, setOTPValues] = useState(Array<string>(length).fill(''));

  // Helper to return OTP from inputs
  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join('');
      onChangeOTP(otpValue);
    },
    [onChangeOTP],
  );

  // Change OTP value at focussing input
  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || '';
      setOTPValues(updatedOTPValues);
      handleOtpChange(updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues],
  );

  // Focus `inputIndex` input
  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length],
  );

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  // Handle onFocus input
  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index);
    },
    [focusInput],
  );

  // Handle onChange value for each input
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.currentTarget.value;
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput],
  );

  // Handle onBlur input
  const onBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  // Handle onKeyDown input
  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = e.key;

      switch (pressedKey) {
        case 'Backspace':
        case 'Delete': {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus('');
          } else {
            focusPrevInput();
          }
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case 'ArrowRight': {
          e.preventDefault();
          focusNextInput();
          break;
        }
        default: {
          if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault();
          }

          break;
        }
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues],
  );

  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length - activeInput)
        .split('');
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = val;
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });
        setOTPValues(updatedOTPValues);
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, length, otpValues],
  );

  return (
    <InputContainer {...rest}>
      {Array(length)
        .fill('')
        .map((_, index) => (
          <SingleInput
            // eslint-disable-next-line react/no-array-index-key
            key={`OTPInput-${index}`}
            error={error}
            aria-label={`${singleInputAriaLabel}-${index}`}
            defaultValue={defaultValue}
            focus={activeInput === index}
            value={otpValues && otpValues[index]}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={onBlur}
            onPaste={handleOnPaste}
            disabled={disabled}
          />
        ))}
    </InputContainer>
  );
}

OTPInputComponent.defaultProps = {
  disabled: undefined,
  defaultValue: undefined,
  error: undefined,
  style: undefined,
  singleInputAriaLabel: 'Single input of OTP',
};

/**
 *  Input for entering the OTP (one-time-password). Can be any length what you want by
 *  manipulating with `length` prop.
 */
const OTPInput = memo(OTPInputComponent);
export default OTPInput;
