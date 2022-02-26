// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { create } from '@storybook/theming';
import logo from './unionLogo.svg';

export default create({
  base: 'light',
  brandTitle: 'Union',
  brandUrl: 'https://unionapp.cc',
  brandImage: logo,
  colorSecondary: "#0DBC44",
});