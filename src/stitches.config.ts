// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  media: {
    min600: '(min-width: 600px)',
    min900: '(min-width: 900px)',
    min1200: '(min-width: 1200px)',
  },
});
