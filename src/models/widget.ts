import { createModel } from '@rematch/core';
import { FormWidget, FormGlobalConfig } from 'src/types/form';
import { DetailWidget, DetailGlobalConfig } from 'src/types/detail';
import produce, { Draft } from 'immer';
import { findIndex, isEmpty, remove } from 'lodash';
import type { RootModel } from './index';
import { arrayMoveMutable } from 'src/utils/app';
import { presetFormGlobalConfig, presetDetailGlobalConfig } from 'src/config/preset';
import { CustomMode } from 'src/types/app';

export interface WidgetState {
  formWidgets: FormWidget[];
  detailWidgets: DetailWidget[];
  formGlobalConfig: FormGlobalConfig;
  detailGlobalConfig: DetailGlobalConfig;
  activeFormWidget: FormWidget | null;
  activeDetailWidget: DetailWidget | null;
}

export const widget = createModel<RootModel>()({
  state: {
    formWidgets: [],
    detailWidgets: [],
    activeFormWidget: null,
    activeDetailWidget: null,
    formGlobalConfig: presetFormGlobalConfig,
    detailGlobalConfig: presetDetailGlobalConfig,
  } as WidgetState,
  reducers: {
    initDetailApp: (
      state: WidgetState,
      {
        widgets,
        globalConfig,
      }: {
        widgets: DetailWidget[];
        globalConfig: DetailGlobalConfig;
      }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        draftState.detailWidgets = widgets;
        if (!isEmpty(globalConfig)) {
          draftState.detailGlobalConfig = globalConfig;
        }
        draftState.activeDetailWidget = null;
      });
    },
    initFormApp: (
      state: WidgetState,
      {
        widgets,
        globalConfig,
      }: {
        widgets: FormWidget[];
        globalConfig: FormGlobalConfig;
      }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        draftState.formWidgets = widgets;
        if (!isEmpty(globalConfig)) {
          draftState.formGlobalConfig = globalConfig;
        }
        draftState.activeFormWidget = null;
      });
    },
    insertWidget: (
      state: WidgetState,
      {
        customMode,
        insertIndex,
        insertWidget,
      }: { customMode: CustomMode; insertIndex: number; insertWidget: FormWidget | DetailWidget }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        if (customMode === CustomMode.Detail) {
          draftState.detailWidgets.splice(insertIndex, 0, insertWidget as DetailWidget);
        } else {
          draftState.formWidgets.splice(insertIndex, 0, insertWidget as FormWidget);
        }
      });
    },
    swapWidgets: (
      state: WidgetState,
      { customMode, from, to }: { customMode: CustomMode; from: number; to: number }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        if (customMode === CustomMode.Detail) {
          arrayMoveMutable(draftState.detailWidgets, from, to);
        } else {
          arrayMoveMutable(draftState.formWidgets, from, to);
        }
      });
    },
    configWidget: (
      state: WidgetState,
      {
        customMode,
        id,
        config,
      }: { customMode: CustomMode; id: string; config: Partial<FormWidget | DetailWidget> }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        if (customMode === CustomMode.Detail) {
          const index = findIndex(state.detailWidgets, { id });
          draftState.detailWidgets[index] = {
            ...state.detailWidgets[index],
            ...config,
          } as DetailWidget;
        } else {
          const index = findIndex(state.formWidgets, { id });
          draftState.formWidgets[index] = {
            ...state.formWidgets[index],
            ...config,
          } as FormWidget;
        }
      });
    },
    configFormGlobal: (state: WidgetState, { config }: { config: Partial<FormGlobalConfig> }) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        draftState.formGlobalConfig = {
          ...state.formGlobalConfig,
          ...config,
        };
      });
    },
    configDetailGlobal: (
      state: WidgetState,
      { config }: { config: Partial<DetailGlobalConfig> }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        draftState.detailGlobalConfig = {
          ...state.detailGlobalConfig,
          ...config,
        };
      });
    },
    removeWidget: (
      state: WidgetState,
      { customMode, id }: { customMode: CustomMode; id: string }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        if (customMode === CustomMode.Detail) {
          remove(draftState.detailWidgets, { id });
        } else {
          remove(draftState.formWidgets, { id });
        }
      });
    },
    setActiveWidget: (
      state: WidgetState,
      { customMode, id }: { customMode: CustomMode; id: string }
    ) => {
      return produce(state, (draftState: Draft<WidgetState>) => {
        if (customMode === CustomMode.Detail) {
          const index = findIndex(state.detailWidgets, { id });
          draftState.activeDetailWidget = state.detailWidgets[index];
        } else {
          const index = findIndex(state.formWidgets, { id });
          draftState.activeFormWidget = state.formWidgets[index];
        }
      });
    },
  },
});
