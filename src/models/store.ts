import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models, RootModel } from './index';
import persistPlugin from '@rematch/persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import selectPlugin from '@rematch/select';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'app',
  // Temporarily disbale all state persistence for development
  transforms: [
    createWhitelistFilter('app', []),
    createWhitelistFilter('table', []),
    createWhitelistFilter('widget', []),
  ],
  blacklist: [],
  storage,
  // This is important, default setting is autoMergeLevel1,
  // it will merge initial state and cause error
  stateReconciler: autoMergeLevel2,
};

export const store = init<RootModel>({
  models,
  plugins: [persistPlugin(persistConfig), selectPlugin()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
