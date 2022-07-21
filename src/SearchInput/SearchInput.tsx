/* eslint-disable no-unused-vars */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as LabelPrimitive from '@radix-ui/react-label';
import {
  ChangeEvent, useRef, useState, useEffect,
} from 'react';
import GrayShades from '../Colors/GrayShades/GrayShades';
import BrandColors from '../Colors/BrandColors/BrandColors';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';
import CloseIcon from '../Icons/CloseIcon/CloseIcon';

export interface SearchInputProps {
  /**
   *  When true, input visually indicates that user made an error.
   */
  error?: boolean;
  /**
   *  When true, the input takes full width of a container.
   */
  fullWidth?: boolean;
  /**
   *  When true, prevents the user from interacting with the input.
   */
  disabled?: boolean;
  /**
   *  Label, which be placed next to the input.
   */
   label?: string;
  /**
   *  Id attribute of input
   */
   id?: string;
  /**
   *  Value of the input. Makes the input controlled.
   */
   value?: string;
  /**
   *  Default value of the input, shows that value on render. Makes the input controlled.
   */
   defaultValue?: string;
  /**
   *  Placeholder for the input, helps users to understand what they need to enter to this field.
   */
   placeholder?: string;
  /**
   *  Input change handler.
   */
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StyledLabel = styled(LabelPrimitive.Root, {
  color: GrayShades.dark,
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
  backgroundColor: GrayShades.white,
  '&::placeholder': {
    color: GrayShades.darkGray,
  },
  '&::-webkit-search-cancel-button': {
    '-webkit-appearance': 'none',
    display: 'none',
  },
  '&:focus': {
    position: 'relative',
    borderColor: BrandColors.darkGreen,
  },
  variants: {
    error: {
      true: {
        borderColor: BrandColors.red,
        color: BrandColors.red,
        caretColor: BrandColors.red,
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
        cursor: 'inherit',
        opacity: 0.6,
      },
    },
  },
});

const Flex = styled('div', {
  display: 'flex',
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});

const InputContainer = styled('div', {
  display: 'flex',
  textAlign: 'left',
  position: 'relative',
  border: `2px solid ${GrayShades.navigationGray}`,
  alignItems: 'center',
  borderRadius: '3px',
  '&:focus-within': {
    position: 'relative',
    borderColor: BrandColors.darkGreen,
  },
  variants: {
    error: {
      true: {
        borderColor: BrandColors.red,
        color: BrandColors.red,
        '&:focus': { position: 'relative', borderColor: BrandColors.red },
        '&:focus-within': {
          position: 'relative',
          borderColor: BrandColors.red,
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});

const IconContainer = styled('div', {
  display: 'flex',
  height: 35,
  width: 35,
  backgroundColor: GrayShades.white,
  justifyContent: 'center',
  alignItems: 'center',
});

const ClearIconContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  right: 0,
  cursor: 'pointer',
  height: 35,
  width: 35,
  backgroundColor: GrayShades.white,
  justifyContent: 'center',
  alignItems: 'center',
});

/**
 *  UI component for searching certain value.
 */
const SearchInput = ({
  error, label, id, defaultValue, placeholder, onChange,
  fullWidth, value, disabled, ...props
}:SearchInputProps) => {
  const [currentValue, setCurrentValue] = useState('');
  const refContainer = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);

    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setCurrentValue(defaultValue);
    }
  }, [defaultValue]);

  const handleInputClean = () => {
    if (refContainer && refContainer.current) {
      refContainer.current.value = '';
    }
    setCurrentValue('');
  };

  return (
    <Flex fullWidth={fullWidth}>
      <InputContainer error={error} fullWidth={fullWidth}>
        <IconContainer>
          <SearchIcon size="18px" fill={error ? BrandColors.red : GrayShades.navigationGray} />
        </IconContainer>
        <Input
          disabled={disabled}
          value={value}
          ref={refContainer}
          id={id}
          fullWidth={fullWidth}
          onChange={disabled ? undefined : handleInputChange}
          error={error}
          placeholder={placeholder}
          type="search"
          defaultValue={defaultValue}
          {...props}
        />
        {((currentValue && currentValue.length > 0) || ((value && value.length > 0)
        ))
        && (
        <ClearIconContainer onClick={handleInputClean}>
          <CloseIcon size="24px" fill={error ? BrandColors.red : GrayShades.navigationGray} />
        </ClearIconContainer>
        )}
      </InputContainer>
      {label && (
      <StyledLabel css={{ paddingLeft: 15 }} htmlFor={id}>
        {label}
      </StyledLabel>
      )}
    </Flex>
  );
};

SearchInput.defaultProps = {
  error: false,
  fullWidth: false,
  disabled: false,
  label: null,
  onChange: undefined,
  defaultValue: undefined,
  value: undefined,
  id: undefined,
  placeholder: 'Your Text...',
};

export default SearchInput;
