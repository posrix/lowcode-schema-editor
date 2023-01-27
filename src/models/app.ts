import { createModel } from '@rematch/core';
import produce, { Draft } from 'immer';
import type { RootModel } from './index';
import { isCustomMode } from 'src/utils/type';
import { EditorModalProps } from 'src/components/EditorModal';
import { nanoid } from 'nanoid';
import {
  CustomMode,
  LayoutMode,
  LayoutModeType,
  QiankunBootProps,
  SaveSchemaApiDto,
  ExternalConfig,
} from 'src/types/app';

export interface AppState {
  editorModalVisible: boolean;
  editorModalProps: EditorModalProps;
  layoutMode: LayoutMode;
  customMode: CustomMode | undefined;
  qiankun: QiankunBootProps;
  apiContext: SaveSchemaApiDto;
  externalConfig: ExternalConfig;
}

export const app = createModel<RootModel>()({
  state: {
    editorModalVisible: false,
    editorModalProps: {},
    layoutMode: LayoutModeType.Pc,
    customMode: undefined,
    qiankun: {},
    apiContext: {},
    externalConfig: {},
  } as AppState,
  reducers: {
    initQiankun: (state: AppState, qiankun: QiankunBootProps) => {
      return {
        ...state,
        qiankun,
      };
    },
    setLayoutMode: (state: AppState, layoutMode: LayoutMode) => {
      return {
        ...state,
        layoutMode,
      };
    },
    setEditorModalVisible: (state: AppState, editorModalVisible: boolean) => {
      return {
        ...state,
        editorModalVisible,
      };
    },
    setEditorModalPropsJsonOject: (state: AppState, jsonObject: any) => {
      return produce(state, (draftState: Draft<AppState>) => {
        draftState.editorModalProps.jsonObject = jsonObject;
      });
    },
    setEditorModalProps: (state: AppState, editorModalProps: EditorModalProps) => {
      return {
        ...state,
        editorModalProps,
      };
    },
    setCustomMode: (state: AppState, customMode: CustomMode) => {
      return {
        ...state,
        customMode,
      };
    },
    setApiContext: (state: AppState, apiContext: SaveSchemaApiDto) => {
      return {
        ...state,
        apiContext,
      };
    },
    setEexternalConfig: (state: AppState, externalConfig: ExternalConfig) => {
      return {
        ...state,
        externalConfig,
      };
    },
  },
  effects: (dispatch) => ({
    initApp: ({
      customMode,
      apiContext,
      externalConfig,
    }: Pick<AppState, 'customMode' | 'apiContext' | 'externalConfig'>) => {
      if (isCustomMode(customMode)) {
        dispatch.app.setCustomMode(customMode);
      }
      dispatch.app.setApiContext(apiContext);
      dispatch.app.setEexternalConfig(externalConfig);
    },
    activeEditorModal: (editorModalProps: EditorModalProps) => {
      dispatch.app.setEditorModalVisible(true);
      dispatch.app.setEditorModalProps({ ...editorModalProps, instanceId: nanoid(5) });
    },
  }),
});
