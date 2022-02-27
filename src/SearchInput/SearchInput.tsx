/* eslint-disable no-unused-vars */
// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { ChangeEvent, FormEvent, useState } from 'react';
import SearchIcon from '../Icons/14pt/SearchIcon14/SearchIcon14';
import GrayShades from '../Colors/GrayShades/GrayShades';
import BrandColors from '../Colors/BrandColors/Brand';

export interface SearchInputProps {
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
   label?: string;
  /**
   *  Variant of button
   */
   id: string;
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
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
  '&::-webkit-search-cancel-button': {
    cursor: 'pointer',
    marginRight: 10,
  },
  '&:focus': {
    position: 'relative',
    borderColor: '#0DBC44',
  },
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
  border: `2px solid ${GrayShades.navigationGray}`,
  alignItems: 'center',
  borderRadius: '3px',
  '&:focus-within': {
    position: 'relative',
    borderColor: '#0DBC44',
  },
  variants: {
    error: {
      true: {
        borderColor: BrandColors.red,
        color: BrandColors.red,
        '&:focus': { position: 'relative', borderColor: BrandColors.red },
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
  justifyContent: 'center',
  alignItems: 'center',
});

/**
 * Primary UI component for user interaction
 */
const SearchInput = ({
  error, label, id, defaultValue, placeholder, onChange, fullWidth, errorText,
}:SearchInputProps) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
    onChange(e);
  };

  return (
    <Flex fullWidth={fullWidth}>
      <InputContainer error={error} fullWidth={fullWidth}>
        <IconContainer>
          <SearchIcon fill={GrayShades.navigationGray} purposeLabel="Search Icon" />
        </IconContainer>
        <Input
          id={id}
          fullWidth={fullWidth}
          onChange={handleInputChange}
          error={error}
          placeholder={placeholder}
          type="search"
          defaultValue={defaultValue}
        />
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
  label: null,
  defaultValue: null,
  placeholder: 'Your Text...',
  errorText: '',
};

export default SearchInput;
