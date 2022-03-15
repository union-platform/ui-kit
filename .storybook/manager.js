// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { addons } from '@storybook/addons';
import unionTheme from './unionTheme';
import './titleAddon';

addons.setConfig({
  theme: unionTheme,
});