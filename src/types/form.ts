import { RuleObject } from 'antd/lib/form';
import { UploadListType } from 'antd/lib/upload/interface';
import { DataSourceMode, StringObject, TwoDimensionalArray, FormSchemaType } from './app';
// import { Moment } from 'moment';

export enum FormWidgetTag {
  Input = '单行文本',
  Textarea = '多行文本',
  Numerical = '数值输入框',
  Password = '密码输入框',
  Radio = '单选框',
  Upload = '上传',
  Date = '日期选择器',
  Range = '区间选择器',
  Custom = '自定义',
  Select = '下拉选择器',
}

export enum FormWidgetIcon {
  Input = 'input',
  Textarea = 'textarea',
  Numerical = 'numerical',
  Password = 'password',
  Radio = 'radio',
  Upload = 'upload',
  Date = 'date',
  Range = 'range',
  Custom = 'custom',
  Select = 'select',
}

export enum FormWidgetType {
  Input = 'input',
  TextArea = 'textarea',
  Numerical = 'numerical',
  Password = 'password',
  Radio = 'radio',
  Upload = 'upload',
  Date = 'date',
  Range = 'range',
  Custom = 'custom',
  Select = 'select',
}

export interface FormWidgetMeta<Tag, Icon, WidgetType> {
  id?: string;
  tag: Tag;
  icon: Icon;
  widgetType: WidgetType;
  type?: FormSchemaType;
}

export interface FormWidgetCommonProps<DefauleValueType = string> {
  defaultValue?: DefauleValueType;
  description?: string;
  required?: boolean;
  readOnly?: boolean;
  rules?: RuleObject[];
  name: string;
  title: string;
  userCreated: boolean;
  useInteractive: {
    preventDefaultTouchEvent: boolean;
  };
  hidden: boolean;

  // Only for table search configuration
  // Table searh configuration might be independent in the future
  query?: {
    searchExp: string;
  };
}

export interface FormInputWidget
  extends FormWidgetMeta<FormWidgetTag.Input, FormWidgetIcon.Input, FormWidgetType.Input>,
    FormWidgetCommonProps {}

export interface FormTextAreaWidget
  extends FormWidgetMeta<FormWidgetTag.Textarea, FormWidgetIcon.Textarea, FormWidgetType.TextArea>,
    FormWidgetCommonProps {
  componentProps: {
    rows: number;
    autoSize: boolean;
  };
}

export interface FormNumericalWidget
  extends FormWidgetMeta<
      FormWidgetTag.Numerical,
      FormWidgetIcon.Numerical,
      FormWidgetType.Numerical
    >,
    FormWidgetCommonProps<number> {
  componentProps: {
    min: number;
    max: number;
  };
}

export interface FormPasswordWidget
  extends FormWidgetMeta<FormWidgetTag.Password, FormWidgetIcon.Password, FormWidgetType.Password>,
    FormWidgetCommonProps {}

export interface FormRadioWidget
  extends FormWidgetMeta<FormWidgetTag.Radio, FormWidgetIcon.Radio, FormWidgetType.Radio>,
    FormWidgetCommonProps {}

export interface FormUploadWidget
  extends FormWidgetMeta<FormWidgetTag.Upload, FormWidgetIcon.Upload, FormWidgetType.Upload>,
    FormWidgetCommonProps {
  componentProps: {
    maxCount: number;
    uploadText: string;
    contentType: UploadListType;
  };
}

export interface FormSelectWidget
  extends FormWidgetMeta<FormWidgetTag.Select, FormWidgetIcon.Select, FormWidgetType.Select>,
    FormWidgetCommonProps {
  componentProps: {
    mode: 'multiple' | 'tags';
  };
  dependency: {
    fields: string[];
  };
  dataSourceMode: DataSourceMode;
  dataSource: {
    uri: string;
    method: 'get' | 'post';
    params: StringObject;
    customQueryField: string;
  };
  staticDataSource: StringObject;
  setFieldsOnChange: {
    field: string;
    value: string;
  }[];
  customDialog: string;
  selectOptions: {
    customOption: string;
    maxSelectCount?: number;
  };
}

export interface FormDateWidget
  extends FormWidgetMeta<FormWidgetTag.Date, FormWidgetIcon.Date, FormWidgetType.Date>,
    FormWidgetCommonProps {
  componentProps: {
    showNow: boolean;
    format: string;
    submitFormat: string;
    dateFormat: string;
    timeFormat: string;
    showTime: boolean;
  };
}

export interface FormRangeWidget
  extends FormWidgetMeta<FormWidgetTag.Range, FormWidgetIcon.Range, FormWidgetType.Range>,
    FormWidgetCommonProps {
  componentProps: {
    format: string;
    dateFormat: string;
    timeFormat: string;
    showTime: boolean;
    submitFormat: string;
  };
}

export interface FormCustomWidget
  extends FormWidgetMeta<FormWidgetTag.Custom, FormWidgetIcon.Custom, FormWidgetType.Custom>,
    FormWidgetCommonProps {
  appCustomComponent: string;
  componentProps: any;
  autoFillOnlyOne: boolean;
  setFieldsOnChange: {
    field: string;
    value: string;
  }[];
  dependency: {
    fields: string[];
  };
}

export type FormWidget =
  | FormInputWidget
  | FormTextAreaWidget
  | FormNumericalWidget
  | FormPasswordWidget
  | FormRadioWidget
  | FormUploadWidget
  | FormSelectWidget
  | FormDateWidget
  | FormRangeWidget
  | FormCustomWidget;

export interface FormGlobalConfig {
  type: 'object';
  name: string;
  title: string;
  uri: string;
  fields: TwoDimensionalArray<string>;
}
