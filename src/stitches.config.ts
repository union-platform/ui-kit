// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 1200px)',
  },
});
