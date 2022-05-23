// SPDX-FileCopyrightText: 2022 Union
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import addons from '@storybook/addons'
import { STORY_RENDERED } from '@storybook/core-events'
import Meta from '../package.json';

addons.register('TitleAddon', api => {
  const customTitle = `Union UI ${Meta.version}`; // Define your customTitle title
  let interval = null;
  const setTitle = () => {
    clearTimeout(interval);
    let storyData = null;
    try {
        storyData = api.getCurrentStoryData(); // Some time get error
    } catch(e) {}
    let title;
    if (!storyData) {
        title = customTitle;
    } else {
        title = `${storyData.kind} - ${storyData.name} ⋅ ${customTitle}`
    }
    if (document.title !== title) { // As few dom operations as possible
        document.title = title;
    }
    interval = setTimeout(setTitle, 100);
  };
  setTitle();
  api.on(STORY_RENDERED, story => {
    setTitle();
  })
});