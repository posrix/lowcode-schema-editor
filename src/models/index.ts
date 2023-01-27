import { Models } from '@rematch/core';
import { app } from './app';
import { widget } from './widget';
import { table } from './table';

export interface RootModel extends Models<RootModel> {
  app: typeof app;
  widget: typeof widget;
  table: typeof table;
}

export const models: RootModel = { app, widget, table };
