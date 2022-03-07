// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import '@testing-library/jest-dom';

 global.ResizeObserver = class ResizeObserver {
   cb: any;
   constructor(cb: any) {
     this.cb = cb;
   }
   observe() {
     this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
   }
   unobserve() {}
   disconnect() {}
 };