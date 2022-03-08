// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later
export interface IconProps {
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
