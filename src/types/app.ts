import { DetailWidget } from './detail';
import { FormWidget } from './form';
import { TableWidget } from './table';

export type LayoutMode = LayoutModeType.Pc | LayoutModeType.Mobile;

export enum LayoutModeType {
  Pc = 'pc',
  Mobile = 'mobile',
}

export enum DataSourceMode {
  Static = 'static',
  Dynamic = 'dynamic',
}

export enum CustomMode {
  Form = 'form',
  Detail = 'detail',
  Table = 'table',
}

export enum DetailSchemaType {
  String = 'string',
  Date = 'date',
  ImageList = 'imageList',
  VideoList = 'videoList',
  DocumentList = 'documentList',
}

export enum FormSchemaType {
  String = 'string',
  Number = 'number',
  Array = 'array',
  Date = 'date',
  Boolean = 'boolean',
  Object = 'object',
  ImageList = 'imageList',
  VideoList = 'videoList',
  DocumentList = 'documentList',
}

export enum PageActionType {
  Modal = 'modal',
  Link = 'link',
}

export type QiankunBootProps = {
  container?: any;
  pathname?: string;
  onGlobalStateChange?: (state: any, prev: any) => void;
  setGlobalState?: (state: any) => void;
};

export type Widget = FormWidget | DetailWidget | TableWidget;

export type Widgets = FormWidget[] | DetailWidget[] | TableWidget[];

export type SaveSchemaApiDto = {
  id?: string;
};

export type ReceivedMessageType = {
  type: CustomMode;
  widgets: any[];
};

export type PostMessageType = {
  type: CustomMode;
  widgets: any[];
  schema: any;
};

type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

export type JsonObject = {
  [key: string]: JSONValue;
};

export type AnyObject = { [key: string]: any };

export type StringObject = { [key: string]: string };

export type NestedArray<T> = Array<T> | Array<NestedArray<T>>;

export type TwoDimensionalArray<T> = T[] | T[][];

export interface ExternalConfig {
  name: string;
  title: string;
}
