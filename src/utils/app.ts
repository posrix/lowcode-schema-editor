import { FormWidget, FormGlobalConfig } from 'src/types/form';
import { DetailWidget, DetailGlobalConfig } from 'src/types/detail';
import { ExternalConfig } from 'src/types/app';
import {
  ActionGlobalConfig,
  ExportGlobalConfig,
  ImportGlobalConfig,
  TableColumn,
  TableGlobalConfig,
} from 'src/types/table';

export const getLocalStorage = (storageName: string) => {
  return window.localStorage.getItem(storageName) || '';
};

export const setLocalStorage = (storageName: string, storageValue: string) => {
  window.localStorage.setItem(storageName, storageValue);
};

export const removeLocalStorage = (storageName: string) => {
  window.localStorage.removeItem(storageName);
};

export function arrayMoveMutable(array: any[], fromIndex: number, toIndex: number) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }
}

export function arrayMoveImmutable(array: any[], fromIndex: number, toIndex: number) {
  array = [...array];
  arrayMoveMutable(array, fromIndex, toIndex);
  return array;
}

export const normalizingFileUpload = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const produceFormSchema = (
  widgets: FormWidget[],
  externalConfig: ExternalConfig,
  globalConfig: FormGlobalConfig
) => {
  return {
    externalConfig,
    globalConfig,
    fields: globalConfig.fields.length ? globalConfig.fields : widgets.map((widget) => widget.name),
    widgets,
  };
};

export const produceDetailSchema = (
  widgets: DetailWidget[],
  externalConfig: ExternalConfig,
  globalConfig: DetailGlobalConfig
) => {
  return {
    externalConfig,
    globalConfig,
    fields: globalConfig.fields.length ? globalConfig.fields : widgets.map((widget) => widget.name),
    widgets
  };
};

export const produceTableSchema = (
  formWidgets: FormWidget[],
  tableColumns: TableColumn[],
  externalConfig: ExternalConfig,
  searchGlobalConfig: FormGlobalConfig,
  tableGlobalConfig: TableGlobalConfig,
  exportGlobalConfig: ExportGlobalConfig,
  importGlobalConfig: ImportGlobalConfig,
  actionGlobalConfig: ActionGlobalConfig
) => {
  return {
    formWidgets,
    tableColumns,
    externalConfig,
    searchGlobalConfig,
    tableGlobalConfig,
    exportGlobalConfig,
    importGlobalConfig,
    actionGlobalConfig,
  };
};
