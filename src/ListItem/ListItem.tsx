// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { ReactNode } from 'react';
import GrayShades from '../Colors/GrayShades/GrayShades';
import Text from '../Typography/Text/Text';
import Heading5 from '../Typography/Heading5/Heading5';
import BrandColors from '../Colors/BrandColors/BrandColors';

export interface ListItemProps {
    /**
   *  Test id label for testing
   */
     'data-testid'?: string;
  /**
   *  Main title of the element.
   */
   title?: string;
  /**
   *  Bottom subheading of the `title`
   */
   description?: string;
  /**
   *  Optional click handler.
   */
   onClick?: () => void;
   /**
   *   Control on the right of the title.
   */
   rightControl?: ReactNode;
  /**
   *   Control on the left of the title.
   *   Primary used as an icon, but if no `title` and `description` provided,
   *   `leftControl` element will be rendered on the far left.
   */
   leftControl?: ReactNode;
}

const ListItemContainer = styled('div', {
  display: 'flex',
  width: '100%',
  cursor: 'auto',
  transition: 'background-color 0.3s ease',
  borderRadius: '4px',

  variants: {
    selectable: {
      true: {
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: BrandColors.transparentGreen1,
        },
      },
    },
  },

  '&:hover': {
    opacity: 1,
  },
});

const ListItemLeftContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const ListItemLeftText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ListItemLeftControlContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginRight: 12,
});

const ListItemTitle = styled(Text, {
  display: 'flex',
  flexDirection: 'column',
});

const ListItemContentContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  margin: '10px 16px 10px 16px',
  userSelect: 'none',
});

const ListItemDescription = styled(Heading5, {
  color: GrayShades.darkGray,
});

const ListItemRightControlContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

/**
 *  Element of lists, used in settings, profile screens.
 */
const ListItem = ({
  rightControl, title, 'data-testid': dataTestId, description, onClick, leftControl, ...props
}: ListItemProps) => (
  <ListItemContainer
    data-testid={dataTestId}
    selectable={onClick !== undefined}
    {...props}
    onClick={onClick}
  >
    <ListItemContentContainer>
      <ListItemLeftContainer>
        {leftControl && (
        <ListItemLeftControlContainer>
          {leftControl}
        </ListItemLeftControlContainer>
        )}
        <ListItemLeftText>
          {title && <ListItemTitle weight="regular">{title}</ListItemTitle>}
          {description && <ListItemDescription>{description}</ListItemDescription>}
        </ListItemLeftText>
      </ListItemLeftContainer>
      {rightControl
      && <ListItemRightControlContainer>{rightControl}</ListItemRightControlContainer>}
    </ListItemContentContainer>
  </ListItemContainer>
);

ListItem.defaultProps = {
  leftControl: undefined,
  rightControl: undefined,
  title: undefined,
  'data-testid': undefined,
  description: undefined,
  onClick: undefined,
};

export default ListItem;
