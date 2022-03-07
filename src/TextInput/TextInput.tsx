/* eslint-disable no-unused-vars */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';

export interface TextInputProps {
  /**
   *  Variant of button
   */
  error?: boolean;
  /**
   *  Variant of button
   */
  errorText?: string;
  /**
   *  Variant of button
   */
  fullWidth?: boolean;
  /**
   *  Variant of button
   */
  maxSymbols?: number;
  /**
   *  Variant of button
   */
   label?: string;
  /**
   *  Variant of button
   */
   value?: string;
  /**
   *  Variant of button
   */
   id?: string;
  /**
   *  Variant of button
   */
   defaultValue?: string;
  /**
   *  Variant of button
   */
   placeholder?: string;
  /**
   *  Variant of button
   */
   disabled?: boolean;
  /**
   *  Variant of button
   */
   type: 'number' | 'text' | 'search' | 'phone';
  /**
   *  Variant of button
   */
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   *  Variant of button
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
  color: '#222222',
  caretColor: '#0DBC44',
  backgroundColor: 'transparent',
  borderBottom: '3px solid #222222',
  '&:focus': { position: 'relative', borderColor: '#0DBC44' },

  variants: {
    error: {
      true: {
        borderColor: '#DD4A29',
        color: '#DD4A29',
        '&:focus': { position: 'relative', borderColor: '#DD4A29' },
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
});

const ErrorText = styled('span', {
  display: 'flex',
  fontSize: '12px',
  fontFamily: 'Open Sans, sans-serif',
  color: '#DD4A29',
});

const Counter = styled('span', {
  fontSize: '12px',
  fontFamily: 'Open Sans, sans-serif',
  flexDirection: 'column',
  color: '#959595',
  variants: {
    error: {
      true: {
        color: '#DD4A29',
      },
    },
  },
});

/**
 * Primary UI component for user interaction
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
    onChange(e);
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
    <Flex css={{ padding: '0 20px', flexWrap: 'wrap', alignItems: 'center' }}>
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
  onError: null,
  disabled: false,
  placeholder: 'Your Text...',
  errorText: '',
  id: undefined,
};

export default TextInput;
