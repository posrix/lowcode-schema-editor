import { createModel } from '@rematch/core';
import produce, { Draft } from 'immer';
import type { RootModel } from './index';
import {
  TableColumn,
  ActionGlobalConfig,
  ExportGlobalConfig,
  TableGlobalConfig,
  ImportGlobalConfig,
} from 'src/types/table';
import {
  presetTabelGlobalConfig,
  presetActionGlobalConfig,
  presetExportGlobalConfig,
  presetImportGlobalConfig,
} from 'src/config/preset';
import { isEmpty, remove } from 'lodash';

export interface TableState {
  tableColumns: TableColumn[];
  tableGlobalConfig: TableGlobalConfig;
  exportGlobalConfig: ExportGlobalConfig;
  importGlobalConfig: ImportGlobalConfig;
  actionGlobalConfig: ActionGlobalConfig;
}

export const table = createModel<RootModel>()({
  state: {
    tableColumns: [],
    tableGlobalConfig: presetTabelGlobalConfig,
    exportGlobalConfig: presetExportGlobalConfig,
    importGlobalConfig: presetImportGlobalConfig,
    actionGlobalConfig: presetActionGlobalConfig,
  } as TableState,
  reducers: {
    initTableApp: (
      state: TableState,
      {
        tableColumns,
        tableGlobalConfig,
        exportGlobalConfig,
        importGlobalConfig,
        actionGlobalConfig,
      }: TableState
    ) => {
      return produce(state, (draftState: Draft<TableState>) => {
        draftState.tableColumns = tableColumns;
        if (!isEmpty(importGlobalConfig)) {
          draftState.tableGlobalConfig = tableGlobalConfig;
        }
        if (!isEmpty(importGlobalConfig)) {
          draftState.exportGlobalConfig = exportGlobalConfig;
        }
        if (!isEmpty(importGlobalConfig)) {
          draftState.importGlobalConfig = importGlobalConfig;
        }
        if (!isEmpty(importGlobalConfig)) {
          draftState.actionGlobalConfig = actionGlobalConfig;
        }
      });
    },
    setColumns: (state: TableState, tableColumns: TableColumn[]) => {
      return {
        ...state,
        tableColumns,
      };
    },
    insertColumn: (
      state: TableState,
      { insertIndex, insertColumn }: { insertIndex: number; insertColumn: TableColumn }
    ) => {
      return produce(state, (draftState: Draft<TableState>) => {
        draftState.tableColumns.splice(insertIndex, 0, insertColumn);
      });
    },
    configColumn: (
      state: TableState,
      { index, config }: { index: number; config: Partial<TableColumn> }
    ) => {
      return produce(state, (draftState: Draft<TableState>) => {
        draftState.tableColumns[index] = {
          ...state.tableColumns[index],
          ...config,
        };
      });
    },
    removeColumn: (state: TableState, id: number) => {
      return produce(state, (draftState: Draft<TableState>) => {
        remove(draftState.tableColumns, { id });
      });
    },
    configTableGlobal: (state: TableState, { config }: { config: Partial<TableGlobalConfig> }) => {
      return produce(state, (draftState: Draft<TableState>) => {
        draftState.tableGlobalConfig = {
          ...state.tableGlobalConfig,
          ...config,
        };
      });
    },
    configImportGlobal: (
      state: TableState,
      { config }: { config: Partial<ImportGlobalConfig> }
    ) => {
      return produce(state, (draftState: Draft<TableState>) => {
        draftState.importGlobalConfig = {
          ...state.importGlobalConfig,
          ...config,
        };
      });
    },
    configExportGlobal: (
      state: TableState,
      { config }: { config: Partial<ExportGlobalConfig> }
    ) => {
      return produce(state, (draftState: Draft<TableState>) => {
        draftState.exportGlobalConfig = {
          ...state.exportGlobalConfig,
          ...config,
        };
      });
    },
    configActionGlobal: (
      state: TableState,
      { config }: { config: Partial<ActionGlobalConfig> }
    ) => {
      return produce(state, (draftState: Draft<TableState>) => {
        draftState.actionGlobalConfig = {
          ...state.actionGlobalConfig,
          ...config,
        };
      });
    },
  },
});
