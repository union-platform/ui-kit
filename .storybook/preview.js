// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}