// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import BrandColors from '../Colors/BrandColors/BrandColors';
import GrayShades from '../Colors/GrayShades/GrayShades';
import AddIcon24 from '../Icons/24pt/AddIcon24/AddIcon24';

export const FAB_BUTTON_SIZE = 56;

export interface FABProps {
  /**
   *  `FABSubButton` that will be shown when the user opens the FAB.
   */
   children?: ReactNode;
  /**
   *  Optional icon to replace default close/open icon.
   */
   customIcon?: ReactNode;
  /**
   *  Optional click handler.
  */
  onClick?: () => void;
}

const FABWrapperAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1, y: 0,
  },
  transition: { duration: 0.5 },
  exit: { opacity: 0, y: -4 },
};

const FABButton = styled('button', {
  backgroundColor: BrandColors.yellowGreen,
  border: 0,
  width: FAB_BUTTON_SIZE,
  height: FAB_BUTTON_SIZE,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '100%',
  boxShadow: '0px 3px 10px 0px #00000026',
  backgroundPosition: 'center',
  transition: 'background 0.8s',

  '&:hover': {
    background: `${BrandColors.yellowGreen} radial-gradient(circle, transparent 1%, ${BrandColors.yellowGreen} 1%) center/15000%`,
  },

  '&:active': {
    backgroundColor: '#afe148',
    backgroundSize: '100%',
    transition: 'background 0s',
  },
});

const FABWrapper = styled(motion.div, {
  position: 'absolute',
  bottom: 30,
  right: 30,
});

const FABContainer = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  zIndex: 10000,
  flexDirection: 'column',
});

const SubFABContainer = styled('div', {
  display: 'flex',
  position: 'absolute',
  bottom: 0,
  zIndex: 10000,
  right: 0,
  flexDirection: 'column',
  marginBottom: FAB_BUTTON_SIZE + 30,
});

const FabIcon = styled('div', {
  display: 'flex',
  transition: 'transform 0.5s ease',

  variants: {
    opened: {
      true: {
        transform: 'rotate(45deg)',
      },
      false: {
        transform: 'rotate(0)',
      },
    },
  },
});

/**
 *  Represents the primary action of a screen.
 */
const FAB = ({
  children, onClick, customIcon, ...props
}: FABProps) => {
  const [fabOpened, setFabOpened] = useState(false);

  const handleFABClick = () => {
    if (onClick) {
      onClick();
    }
    setFabOpened(!fabOpened);
  };

  return (
    <AnimatePresence>
      <FABWrapper
        {...FABWrapperAnimation}
      >
        <FABContainer>
          {(fabOpened && children) && (
          <SubFABContainer data-testid="fab-options">
            {children}
          </SubFABContainer>
          )}
          <FABButton data-testid="fab" onClick={handleFABClick} {...props}>
            {!customIcon
              ? (
                <FabIcon opened={fabOpened}>
                  <AddIcon24 fill={GrayShades.white} />
                </FabIcon>
              )
              : customIcon}
          </FABButton>
        </FABContainer>
      </FABWrapper>
    </AnimatePresence>
  );
};

FAB.defaultProps = {
  children: undefined,
  onClick: undefined,
  customIcon: undefined,
};

export default FAB;
