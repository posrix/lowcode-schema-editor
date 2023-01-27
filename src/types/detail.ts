
import { AnyObject, StringObject, TwoDimensionalArray, DetailSchemaType } from './app';

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


export enum DetailWidgetTag {
  Label = '详情字段',
  QrCode = '二维码',
}

export enum DetailWidgetIcon {
  Label = 'label',
  QrCode = 'qrcode',
}

export enum DetailWidgetType {
  Label = 'label',
  QrCode = 'qrcode',
}

export interface DetailWidgetMeta<Tag, Icon, WidgetType> {
  id?: string;
  name: string;
  tag: Tag;
  icon: Icon;
  widgetType: WidgetType;
  type?: DetailSchemaType;
  hidden: boolean;
  title: string;
}

export type DetailWidgetCommonProps = Pick<
  DetailWidgetMeta<any, any, any>,
  'hidden' | 'title' | 'name'
>;

export interface DetailDefaultWidget
  extends DetailWidgetMeta<DetailWidgetTag.Label, DetailWidgetIcon.Label, DetailWidgetType.Label> {
  userCreated: boolean;
  appearance?: FormItemAppearance;
  staticDataSource?: StringObject;
}

export interface DetailQrCodetWidget
  extends DetailWidgetMeta<
    DetailWidgetTag.QrCode,
    DetailWidgetIcon.QrCode,
    DetailWidgetType.QrCode
  > {
  appearance?: FormItemAppearance;
}

export interface DetailGlobalConfig {
  type: 'object';
  uri: string;
  params: AnyObject;
  fields: TwoDimensionalArray<string>;
}

export type DetailWidget = DetailDefaultWidget | DetailQrCodetWidget;
