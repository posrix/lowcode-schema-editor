import {
  FormWidget,
  FormWidgetIcon,
  FormWidgetType,
  FormWidgetTag,
  FormGlobalConfig,
} from 'src/types/form';
// import moment from 'moment';
import { DataSourceMode, FormSchemaType, DetailSchemaType, PageActionType } from 'src/types/app';
import {
  DetailWidget,
  DetailGlobalConfig,
  DetailWidgetTag,
  DetailWidgetIcon,
  DetailWidgetType,
} from 'src/types/detail';
import {
  TableWidget,
  TableColumn,
  TableGlobalConfig,
  TableWidgetTag,
  ActionGlobalConfig,
  ExportGlobalConfig,
  ImportGlobalConfig,
} from 'src/types/table';

export const presetTableColumn: TableColumn = {
  title: '',
  name: '',
  description: '',
  sorter: false,
  appearance: {},
  staticDataSource: {},
  addExport: true,
  export: { key: '', name: '' },
};

export const presetTableWidgets: TableWidget[] = [
  {
    tag: TableWidgetTag.Default,
  },
];

export const presetImportGlobalConfig: ImportGlobalConfig = {
  uriDownload: '',
  uriImport: '',
  file: '',
  errorFile: '',
};

export const presetExportGlobalConfig: ExportGlobalConfig = {
  uri: '',
  file: '',
  properties: {},
};

export const presetActionGlobalConfig: ActionGlobalConfig = {
  showAdd: { type: PageActionType.Modal },
  showBatch: false,
  showExport: false,
  showImport: false,
};

export const presetTabelGlobalConfig: TableGlobalConfig = {
  type: 'object',
  uri: '',
  fields: [],
  initialFields: [],
  lockedFields: [],
  frozenFields: [],
  cellDataSource: [],
  defaultSort: '',
  primaryKey: '',
  showEnable: {
    url: [],
    body: '',
  },
  showEdit: {
    type: PageActionType.Modal,
  },
  showDetail: true,
  showSetting: false,
};

export const presetDetailWidgets: DetailWidget[] = [
  {
    tag: DetailWidgetTag.Label,
    icon: DetailWidgetIcon.Label,
    type: DetailSchemaType.String,
    widgetType: DetailWidgetType.Label,
    name: '',
    title: '详情标题',
    hidden: false,
    userCreated: false,
    appearance: {},
    staticDataSource: {},
  },
  {
    tag: DetailWidgetTag.QrCode,
    icon: DetailWidgetIcon.QrCode,
    type: DetailSchemaType.String,
    widgetType: DetailWidgetType.QrCode,
    hidden: false,
    title: '二维码',
    name: '',
    appearance: {},
  },
];

export const presetDetailGlobalConfig: DetailGlobalConfig = {
  type: 'object',
  uri: '',
  fields: [],
  params: {},
};

export const presetFormWidgets: FormWidget[] = [
  {
    tag: FormWidgetTag.Input,
    icon: FormWidgetIcon.Input,
    widgetType: FormWidgetType.Input,
    type: FormSchemaType.String,
    title: FormWidgetTag.Input,
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '请输入',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Textarea,
    icon: FormWidgetIcon.Textarea,
    widgetType: FormWidgetType.TextArea,
    type: FormSchemaType.String,
    componentProps: {
      rows: 4,
      autoSize: false,
    },
    name: '',
    title: FormWidgetTag.Textarea,
    required: false,
    readOnly: false,
    hidden: false,
    description: '请输入',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Numerical,
    icon: FormWidgetIcon.Numerical,
    widgetType: FormWidgetType.Numerical,
    title: FormWidgetTag.Numerical,
    type: FormSchemaType.Number,
    componentProps: {
      min: 4,
      max: 10,
    },
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '请输入',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Password,
    icon: FormWidgetIcon.Password,
    widgetType: FormWidgetType.Password,
    title: FormWidgetTag.Password,
    type: FormSchemaType.String,
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '请输入',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Radio,
    icon: FormWidgetIcon.Radio,
    widgetType: FormWidgetType.Radio,
    title: FormWidgetTag.Radio,
    type: FormSchemaType.Boolean,
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Upload,
    icon: FormWidgetIcon.Upload,
    widgetType: FormWidgetType.Upload,
    type: FormSchemaType.ImageList,
    title: FormWidgetTag.Upload,
    componentProps: {
      contentType: 'text',
      maxCount: 2,
      uploadText: '上传',
    },
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Select,
    icon: FormWidgetIcon.Select,
    widgetType: FormWidgetType.Select,
    title: FormWidgetTag.Select,
    type: FormSchemaType.String,
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '请选择',
    componentProps: {
      mode: 'tags',
    },
    dependency: {
      fields: [],
    },
    dataSource: {
      uri: '',
      method: 'get',
      params: {},
      customQueryField: '',
    },
    staticDataSource: {},
    customDialog: '',
    dataSourceMode: DataSourceMode.Static,
    setFieldsOnChange: [],
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
    selectOptions: {
      customOption: '',
    },
  },
  {
    tag: FormWidgetTag.Date,
    icon: FormWidgetIcon.Date,
    widgetType: FormWidgetType.Date,
    title: FormWidgetTag.Date,
    type: FormSchemaType.Date,
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      submitFormat: 'YYYY-MM-DDTHH:mm:ssZ',
      dateFormat: 'YYYY-MM-DD',
      timeFormat: 'HH:mm:ss',
      showNow: false,
      showTime: false,
      // showTime: {
      //   defaultValue: moment('12:00:00', 'HH:mm:ss'),
      // },
    },
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Range,
    icon: FormWidgetIcon.Range,
    widgetType: FormWidgetType.Range,
    title: FormWidgetTag.Range,
    type: FormSchemaType.Date,
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      dateFormat: 'YYYY-MM-DD',
      timeFormat: 'HH:mm:ss',
      showTime: false,
      // showTime: {
      //   defaultValue: [moment('12:00:00', 'HH:mm:ss'), moment('12:00:00', 'HH:mm:ss')],
      // },
      submitFormat: 'YYYY-MM-DDTHH:mmZ',
    },
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '',
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
  {
    tag: FormWidgetTag.Custom,
    icon: FormWidgetIcon.Custom,
    widgetType: FormWidgetType.Custom,
    title: FormWidgetTag.Custom,
    type: FormSchemaType.Array,
    dependency: {
      fields: [],
    },
    setFieldsOnChange: [],
    appCustomComponent: '',
    componentProps: {},
    name: '',
    required: false,
    readOnly: false,
    hidden: false,
    description: '',
    autoFillOnlyOne: false,
    userCreated: false,
    useInteractive: {
      preventDefaultTouchEvent: false,
    },
  },
];

export const presetFormGlobalConfig: FormGlobalConfig = {
  type: 'object',
  name: '',
  title: '',
  uri: '',
  fields: [],
};
