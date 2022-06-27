// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ReactNode } from 'react';
import { IconSize } from '../icon.config';

interface IconWrapperProps extends IconSize {
    children: ReactNode,
}

/**
 *  Icon from Union's Figma UI-kit.
 */
const IconWrapper = ({ children, size }: IconWrapperProps) => (
  <div style={{ width: size, display: 'flex' }}>
    {children}
  </div>
);

export default IconWrapper;
