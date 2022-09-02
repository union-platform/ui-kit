// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import BrandColors from '../../Colors/BrandColors/BrandColors';
import GrayShades from '../../Colors/GrayShades/GrayShades';
import { IconProps } from '../../Icons/icon.config';
import Text from '../../Typography/Text/Text';

export interface BottomNavItemProps {
  /**
   *  Changes appearance of the item, if true.
   */
   'data-testid'?: string;
  /**
   *  Changes appearance of the item as selected, if true.
   */
   isSelected: boolean;
  /**
   *  Optional click handler.
   */
   onClick?: () => void;
  /**
   *  Label, which shows when item `isSelected`. If `undefined` — only icon will be shown.
   */
   label?: string;
  /**
   *  Callback icon builder for icons, which gives you styles for an icon.
   */
   setIcon: (_props:IconProps) => ReactNode;
  /**
   *  Borders of `isSelected` item.
   *  The `start` for first item, the `end` for last,
   *  and the 'full' for any bottom nav item in between.
   */
   borders?: 'start' | 'end' | 'full';
}

const BottomNavItemContainer = styled(motion.div, {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '45px',
  width: '100%',
  padding: '8px 0 8px 0',
  variants: {
    selected: {
      true: {
        width: '100%',
      },
    },
  },
});

// Separated to animate change between items.
const BottomNavItemBG = styled(motion.div, {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '-1',
  backgroundColor: GrayShades.extraLightGray,
  left: 0,
  top: 0,

  variants: {
    borders: {
      full: {
        borderRadius: '20px',
      },
      start: {
        borderRadius: '0px 20px 20px 0px',
      },
      end: {
        borderRadius: '20px 0 0 20px',
      },
    },
  },
});

const BottomNavItemText = styled(Text, {
  marginTop: '4px',
  userSelect: 'none',
  variants: {
    selected: {
      true: {
        color: BrandColors.yellowGreen,
      },
    },
  },
});

const BottomNavItemTextContainer = styled(motion.div, {

});

const animationConfig = {
  type: 'spring',
  stiffness: 150,
  damping: 30,
};

/**
 *  Element of the bottom navigation.
 */
const BottomNavItem = ({
  isSelected, onClick = undefined, label = undefined, 'data-testid': dataTestId, borders = 'full', setIcon, ...props
}: BottomNavItemProps) => (
  <BottomNavItemContainer
    data-testid={dataTestId}
    {...props}
    selected={isSelected}
    onClick={onClick}
  >
    {isSelected && (
      <BottomNavItemBG
        layoutId="bottom-nav-item"
        borders={borders}
        animate={{
          // width: '100%',
          backgroundColor: GrayShades.extraLightGray,
          borderRadius: borders,
        }}
        transition={animationConfig}
        initial={false}
      />
    )}
    {setIcon && setIcon({ fill: isSelected ? BrandColors.yellowGreen : GrayShades.navigationGray, size: '24px', purposeLabel: 'Bottom Navigation Icon' })}
    {(isSelected && label)
    && (
    <BottomNavItemTextContainer>
      <BottomNavItemText selected={isSelected} weight="regular">{label}</BottomNavItemText>
    </BottomNavItemTextContainer>
    )}
  </BottomNavItemContainer>

);

BottomNavItem.defaultProps = {
  onClick: undefined,
  label: undefined,
  'data-testid': undefined,
  borders: 'full',
};

export default BottomNavItem;
