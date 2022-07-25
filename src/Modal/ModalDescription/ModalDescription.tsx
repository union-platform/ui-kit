// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Description } from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import Text from '../../Typography/Text/Text';

export interface ModalDescriptionProps {
  /**
   *  Text value of the description
   */
   children: ReactNode;
}

/**
 *  An optional accessible description to be announced when the dialog is opened.
 */
const ModalDescription = ({
  children, ...props
}: ModalDescriptionProps) => (
  <Description {...props}>
    <Text weight="regular">
      {children}
    </Text>
  </Description>
);

export default ModalDescription;
