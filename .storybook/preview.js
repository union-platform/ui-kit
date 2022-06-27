// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Union-UI', ["Button", ["TextButton"]], "Colors", "Typography", "Icons", ["ProfileIcon"]],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}