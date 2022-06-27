// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export interface IconProps extends IconSize {
    /**
     *  Color of the icon in hex, e.g. `#ffffff`
     */
    fill?: string;
    /**
     *  The accessible label for the icon.
     *  This label will be visually hidden but announced to screen
     *  reader users, similar to `alt` text for `img` tags.
     */
    purposeLabel?: string;
}

export interface IconSize {
   /**
     *  Size of the icon.
     */
  size?: '24px' | '18px' | '14px'
}

/**
 *  Styles of the icon
*/
export const IconStyles = { width: '100%', height: 'auto' };
