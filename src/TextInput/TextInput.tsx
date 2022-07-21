/* eslint-disable no-unused-vars */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import GrayShades from '../Colors/GrayShades/GrayShades';
import BrandColors from '../Colors/BrandColors/BrandColors';

export interface TextInputProps {
  /**
   *  When true, input visually indicates that user made an error.
   */
  error?: boolean;
  /**
   *  The text that be showns when `error` prop is true or `maxSymbols` is exceeds.
   */
  errorText?: string;
  /**
   *  When true, the input takes full width of a container.
   */
  fullWidth?: boolean;
  /**
   *  Maximum symbols for the input. Shows user counter, how much symbols remains.
   */
  maxSymbols?: number;
  /**
   *  Label, which be placed next to the input.
   */
   label?: string;
  /**
   *  Value of the input.
   */
   value?: string;
  /**
   *  Id attribute of the input.
   */
   id?: string;
  /**
   *  Shows this value on first render.
   */
   defaultValue?: string;
  /**
   *  Text to help users understand clearly what they need to enter.
   */
   placeholder?: string;
  /**
   *  When true, prevents the user from interacting with the switch.
   */
   disabled?: boolean;
  /**
   *  Type of the input
   */
   type: 'number' | 'text' | 'search' | 'phone';
  /**
   *  Input change handler.
   */
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   *  Function that been called on error.
   */
   onError?: () => void;
}

const StyledLabel = styled(LabelPrimitive.Root, {
  color: 'black',
  fontSize: 14,
  lineHeight: 1,
  fontFamily: 'Open Sans, sans-serif',
  userSelect: 'none',
});

const Input = styled('input', {
  all: 'unset',
  width: 288,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  height: 35,
  fontSize: 16,
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 400,
  lineHeight: 1,
  color: GrayShades.dark,
  caretColor: BrandColors.darkGreen,
  backgroundColor: 'transparent',
  transition: 'border-color 600ms ease, color 600ms ease',
  borderBottom: `3px solid ${GrayShades.dark}`,
  '&:focus': { position: 'relative', borderColor: BrandColors.darkGreen },
  '&::placeholder': {
    color: GrayShades.darkGray,
  },

  variants: {
    error: {
      true: {
        caretColor: BrandColors.red,
        borderColor: BrandColors.red,
        color: BrandColors.red,
        '&:focus': { position: 'relative', borderColor: BrandColors.red },
        '&::placeholder': {
          color: BrandColors.red,
          opacity: 0.6,
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

const Flex = styled('div', { display: 'flex' });
const InputContainer = styled('div', {
  display: 'flex',
  textAlign: 'left',
  flexDirection: 'column',
  alignItems: 'flex-end',
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});

const InputBottomContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '4px',
});

const ErrorText = styled('span', {
  display: 'flex',
  fontSize: '12px',
  fontFamily: 'Open Sans, sans-serif',
  color: BrandColors.red,
});

const Counter = styled('span', {
  fontSize: '12px',
  fontFamily: 'Open Sans, sans-serif',
  flexDirection: 'column',
  transition: 'color 600ms ease',
  color: GrayShades.darkGray,
  variants: {
    error: {
      true: {
        color: BrandColors.red,
      },
    },
  },
});

/**
 *  A UI component for inputting text into the app via a keyboard
 */
const TextInput = ({
  error, maxSymbols, label, id, defaultValue,
  placeholder, type, onChange, fullWidth, errorText, disabled,
  onError, value, ...props
}:TextInputProps) => {
  const [currentValue, setCurrentValue] = useState('');
  const [isValueAboveMax, setIsValueAboveMax] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);

    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (maxSymbols && currentValue.length > maxSymbols) {
      if (onError) {
        onError();
      }
      setIsValueAboveMax(true);
    } else {
      setIsValueAboveMax(false);
    }
  }, [currentValue]);

  return (
    <Flex css={{ flexWrap: 'wrap', alignItems: 'center' }}>
      <InputContainer fullWidth={fullWidth}>
        <Input
          id={id}
          fullWidth={fullWidth}
          onChange={disabled ? undefined : handleInputChange}
          error={error || isValueAboveMax}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          value={value}
          defaultValue={defaultValue}
          {...props}
        />
        <InputBottomContainer>
          <ErrorText data-testid="error-text">{error && errorText ? errorText : ''}</ErrorText>
          <Counter data-testid="counter" error={error || isValueAboveMax}>{maxSymbols ? `${currentValue.length} / ${maxSymbols}` : ''}</Counter>
        </InputBottomContainer>
      </InputContainer>
      {label && (
      <StyledLabel css={{ paddingLeft: 15 }} htmlFor={id}>
        {label}
      </StyledLabel>
      )}
    </Flex>
  );
};

TextInput.defaultProps = {
  error: false,
  fullWidth: false,
  maxSymbols: null,
  label: null,
  defaultValue: undefined,
  value: undefined,
  onChange: undefined,
  onError: null,
  disabled: false,
  placeholder: 'Your Text...',
  errorText: '',
  id: undefined,
};

export default TextInput;
