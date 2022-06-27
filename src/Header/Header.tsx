// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { styled } from '@stitches/react';
import { ReactNode, useState } from 'react';
import ArrowBackIcon from '../Icons/ArrowBackIcon/ArrowBackIcon';
import Heading3 from '../Typography/Heading3/Heading3';
import GrayShades from '../Colors/GrayShades/GrayShades';
import BrandColors from '../Colors/BrandColors/BrandColors';
import SearchInput, { SearchInputProps } from '../SearchInput/SearchInput';
import Layout from '../Layout/Layout';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';

export interface HeaderProps {
  /**
   *  Title on the top of the header.
   */
   title?: string;
  /**
   *  If true, shows shadow under the header.
   */
   elevated?: boolean;
  /**
   *  If true, adds search button to header, which opens searchbar.
   *  Used with `showSearch` and `searchProps`.
   */
   withSearch?: boolean;
  /**
   *  If true, search input will be shown constantly.
   */
   showSearch?: boolean;
  /**
  *   Props to the SearchInput component.
  */
   searchProps?: SearchInputProps;
  /**
   *  Custom Tab component which will be integrated into the header.
   *  You need to enable `showTabs` prop to show the component.
   */
   tabsComponent?: ReactNode;
   /**
    *  If true, tabs will be shown constantly.
    *  You need to provide Tab component via `tabsComponent` prop first.
    */
    showTabs?: boolean;
  /**
   *  Custom icon component, which will be integrated into the header.
   */
   iconComponent?: ReactNode;
  /**
   *  Link to the previous screen. Starts with `/`. If defined, back button will be shown.
   */
   backLink?: string;
}

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  minWidth: 'max-content',
  borderRadius: 6,
  justifyContent: 'space-between',
  padding: '12px 0 12px 0',
  backgroundColor: 'white',
});

const StyledHeading = styled(Heading3, {
  variants: {
    hideMargin: {
      true: {
        marginLeft: 0,
      },
      false: {
        marginLeft: 10,
      },
    },
  },
});

const HeaderContainer = styled('div', {
  display: 'flex',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 10000,
  flexDirection: 'column',
  position: 'fixed',
  variants: {
    elevated: {
      true: {
        boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.15)',
      },
    },
  },
});

const StyledLink = styled(ToolbarPrimitive.Link, {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: GrayShades.dark,
});

const ModuleContainer = styled('div', {
  padding: '10px 0 10px 0',
  width: '100%',
  backgroundColor: 'white',
});

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: 'flex',
});

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  boxShadow: 0,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  border: 0,
  cursor: 'pointer',
  marginLeft: 2,
  '&:first-child': { marginLeft: 0 },
});

/**
 *  Main navigation element of any website
 */
const Header = ({
  showSearch, showTabs, backLink, elevated,
  withSearch, iconComponent, title, searchProps, tabsComponent, ...props
}: HeaderProps) => {
  const [toogleValue, setToogleValue] = useState(['']);

  const searchOpened = toogleValue.some((val) => val === 'search');

  return (
    <HeaderContainer {...props} elevated={elevated}>
      <Layout>
        <StyledToolbar>
          {backLink ? (
            <StyledLink data-testid="test-header-link-button" href={backLink}>
              <ArrowBackIcon size="24px" fill={BrandColors.darkGreen} />
              <StyledHeading hideMargin={false} weight="bold">{title}</StyledHeading>
            </StyledLink>
          ) : (
            <StyledLink>
              <StyledHeading hideMargin weight="bold">{title}</StyledHeading>
            </StyledLink>
          )}
          <StyledToggleGroup onValueChange={(e) => setToogleValue(e)} type="multiple">
            {withSearch && (
            <StyledToggleItem data-testid="test-header-search-button" value="search">
              <SearchIcon size="24px" fill={searchOpened ? BrandColors.darkGreen : GrayShades.dark} />
            </StyledToggleItem>
            )}
            {iconComponent && (
            <StyledToggleItem data-testid="test-header-additional-button" value="additional">
              {iconComponent}
            </StyledToggleItem>
            )}
          </StyledToggleGroup>
        </StyledToolbar>
        {(showSearch || searchOpened) && (
        <ModuleContainer data-testid="test-header-search-component">
          <SearchInput {...searchProps} fullWidth onChange={() => {}} />
        </ModuleContainer>
        )}
        {showTabs && (
        <ModuleContainer>
          {tabsComponent}
        </ModuleContainer>
        )}
      </Layout>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  showSearch: false,
  showTabs: false,
  withSearch: false,
  searchProps: undefined,
  iconComponent: undefined,
  elevated: true,
  tabsComponent: undefined,
  title: 'Search',
  backLink: undefined,
};

export default Header;
