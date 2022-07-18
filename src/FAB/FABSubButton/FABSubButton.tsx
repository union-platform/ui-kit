// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { styled } from '@stitches/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import Button from '../../Button/Button';
import BrandColors from '../../Colors/BrandColors/BrandColors';

const SUBFAB_BUTTON_SIZE = 46;
const FAB_BUTTON_SIZE = 56;

const FABSubButtonAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1, y: 0,
  },
  transition: { duration: 0.5 },
  exit: { opacity: 0, y: -4 },
};

export interface FABSubButtonProps {
  /**
   *  The text label of the button. If not provided, only the `icon` prop will be shown.
   */
   label?: string;
  /**
   *  The icon of the button. If not provided, only the `icon` prop will be shown.
   */
   icon?: ReactNode;
  /**
   *  Negative (dangerous action, error) state of the button.
   */
   negative?: boolean;
  /**
   *  Optional click handler.
   */
  onClick?: () => void;
}

const SubContainer = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 20,
  cursor: 'pointer',
  backgroundPosition: 'center',
});

const SmallFABButton = styled('button', {
  backgroundColor: BrandColors.darkGreen,
  border: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 5,
  width: SUBFAB_BUTTON_SIZE,
  height: SUBFAB_BUTTON_SIZE,
  marginRight: (FAB_BUTTON_SIZE - SUBFAB_BUTTON_SIZE) / 2,
  cursor: 'pointer',
  borderRadius: '100%',
  backgroundPosition: 'center',
  transition: 'background 0.8s',
  boxShadow: '0px 3px 10px 0px #00000026',

  '&:hover': {
    background: `${BrandColors.darkGreen} radial-gradient(circle, transparent 1%, ${BrandColors.darkGreen} 1%) center/15000%`,
  },

  '&:active': {
    backgroundColor: 'rgb(15 210 77)',
    backgroundSize: '100%',
    transition: 'background 0s',
  },

  variants: {
    negative: {
      true: {
        backgroundColor: BrandColors.red,

        '&:hover': {
          background: `${BrandColors.red} radial-gradient(circle, transparent 1%, ${BrandColors.red} 1%) center/15000%`,
        },

        '&:active': {
          backgroundColor: 'hsla(11, 100%, 51%, 1)',
          backgroundSize: '100%',
          transition: 'background 0s',
        },
      },
    },
  },
});

/**
 *  Content Item of the FAB.
 */
const FABSubButton = ({
  label, icon, onClick, negative, ...props
}: FABSubButtonProps) => (
  <AnimatePresence>
    <SubContainer
      onClick={onClick}
      {...FABSubButtonAnimation}
      {...props}
    >
      {label && <Button negative={negative} variant="primary">{label}</Button>}
      {icon && <SmallFABButton negative={negative}>{icon}</SmallFABButton>}
    </SubContainer>
  </AnimatePresence>
);

FABSubButton.defaultProps = {
  icon: undefined,
  label: undefined,
  negative: undefined,
  onClick: undefined,
};

export default FABSubButton;
