
import { PageActionType, AnyObject, DetailSchemaType, StringObject } from './app';

export declare type TableActionMethod = "post" | "get" | "put" | "options" | "delete" | "patch";

export interface TableCellDataSourceOption {
  // key of data source map
  key: string;

  url: string;

  queryString?: string;
}


export interface TableActionTypeSwapRequest {
  url: string;

  // swap current to other swapIndex,
  // negative value refer to nth before,
  // positive value refer to nth after
  swapIndex?: number;

  // swap field name
  swapKey?: string;

  // request method default is 'post'
  method?: TableActionMethod;

  // custom message show after request success
  successMsg?: string;
}


export interface TableActionTypeRequest {
  url: string;

  // expression string send with request
  // -------------------- Example
  // body: {id: {userRef.id}} = {id: 1}
  // body: {deleteId: {userRef.id}, newId: {userRef.id}} = {deleteId:1, newId:1}
  body: string;

  // request method default is 'post'
  method?: TableActionMethod;

  // custom message show after request success
  successMsg?: string;
}


export interface TableActionTypeLink {
  url: string;
}

export interface TableActionTypeCustom {
  control: string;

  // custom control related schema's name
  schema?: string;

  // custom control data, pass user defined own params
  data?: any;
}


declare type BooleanCondition = boolean;

// expression string
declare type StringCondition = string;

// complex type
declare type ObjectCondition = { [k: string]: any }

export type Condition = BooleanCondition | ObjectCondition | StringCondition;

export type AndCondition = Array<Condition>;

export interface FormItemAppearance {
  // if data's response key is not the same as form name
  // we can put a dot in key string when response item is wrapped in an object
  //
  // ------------ Example --------------
  // res = { username: 'AAA', userCompany: { companyId: '1', companyName: 'Company' } }
  // companyName's appearance key = 'userCompany.companyName'
  appearanceKey?: string;

  // ------------ Example --------------
  // res = { username: 'AAA', roleRefs: [{ id: '1', name: 'RoleA' } ,{ id: '2', name: 'RoleB' }]
  // role's appearance list key = ['roleRefs', 'name']
  // output: RoleA,RoleB
  appearanceListKey?: [string, string];

  // display number value to percentage,
  // only valid when item type is number
  showAsPercentage?: boolean;

  // display date format, default will be 'YYYY-MM-DD'
  dateFormat?: string;

  // expression to display appearance item
  // ------------ Example ---------------
  // res: {
  //  name: 'John',
  //  colorLike: 'red',
  //  age: 18,
  //  genderEnum: 'M'
  // }
  // appearanceExp = '{name}({genderEnum}) - colorLike {colorLike}'
  //
  // display : John(Male) - colorLike red
  appearanceExp?: string;

  // custom control key name
  customControl?: string;

  // custom control params
  customProps?: { [k: string]: any };

  // separator character for parsing appearanceListKey
  separator?: string;

  // 去掉重复的项
  // 这可能导致实际返回的字符串项目少于数组项
  distinct?: boolean;

  // 空值时的占位符，系统的默认值是"-"
  // 仅针对单个值生效，对appearanceList无效
  emptyPlaceholder?: string;
}


export enum TableWidgetTag {
  Default = '通用表格',
}

export interface TableWidget {
  tag: TableWidgetTag;
  icon?: string;
}

export interface TableColumn {
  id?: number;
  name: string;
  type?: DetailSchemaType;
  title: string;
  description: string;
  appearance?: FormItemAppearance;
  staticDataSource?: StringObject;
  sorter: boolean;
  width?: number;
  addExport: boolean;
  export: ExportPropertyValue;
}

export interface ActionGlobalConfig {
  showAdd:
  | {
    type: PageActionType;
  }
  | false;
  showBatch: boolean;
  showImport: boolean;
  showExport: boolean;
}

export interface ExportPropertyValue {
  key: string;
  name: string;
}

export interface ExportProperties {
  [key: string]: ExportPropertyValue;
}

export interface ExportGlobalConfig {
  uri?: string;

  // export file name
  file: string;

  // export params
  properties: ExportProperties;

  // persistFields should always export to excel
  // even they are not displayed on table
  persistFields?: string[];

  // deprecated
  // excel column setting
  queryParams?: { [key: string]: any };
}

export interface ImportGlobalConfig {
  uriDownload: string;
  uriImport: string;
  file: string;
  errorFile: string;
}

// https://lingshu2021.feishu.cn/docs/doccnM775n2bYG12Ll6GB5oRWRe#
interface TableActionSchema {
  // action title / button text
  title: string;

  trigger: {
    link?: TableActionTypeLink;
    request?: TableActionTypeRequest;
    requestSwap?: TableActionTypeSwapRequest;
    custom?: TableActionTypeCustom;
  };

  condition?: Condition | AndCondition;

  // disabled state
  disableCondition?: Condition | AndCondition;

  // show confirm box for action button
  showConfirm?: boolean;

  // confirm title
  confirmTitle?: string;
}

export interface TableGlobalConfig {
  type: 'object';
  uri: string;
  appendQuery?: AnyObject;
  cellDataSource: TableCellDataSourceOption[];
  defaultSort: string;
  primaryKey: string;
  fields: string[];
  initialFields: string[];
  lockedFields: string[];
  frozenFields: string[];
  showEnable: { url: string[]; body: string };
  showEdit:
  | {
    type: PageActionType;
  }
  | boolean;
  showDetail:
  | {
    field: string;
    key: string;
  }
  | boolean;
  showSetting: boolean;
  otherActions?: TableActionSchema;
}
