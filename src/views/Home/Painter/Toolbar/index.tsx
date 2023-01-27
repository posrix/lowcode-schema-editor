import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from 'src/models/store';
import { Button, message, Modal } from 'antd';
import Icon from 'src/components/Icon';
import { CustomMode, LayoutModeType } from 'src/types/app';
import {
  produceDetailSchema,
  produceFormSchema,
  produceTableSchema,
} from 'src/utils/app';
import { AnyObject } from 'src/types/app';
import { isEmpty } from 'lodash';
import { Container, LayoutButton, LayoutButtonContainer, ActionButtonContainer } from './styled';
import JsonEditor from 'src/components/JsonEditor';

export interface ToolbarProps {
  noLayout?: boolean;
}

const Toolbar: React.FC<ToolbarProps> = ({ noLayout = false }) => {
  const {
    formWidgets,
    detailWidgets,
    tableColumns,
    layoutMode,
    customMode,
    detailGlobalConfig,
    formGlobalConfig,
    tableGlobalConfig,
    exportGlobalConfig,
    importGlobalConfig,
    actionGlobalConfig,
    externalConfig,
  } = useSelector((state: RootState) => ({
    formWidgets: state.widget.formWidgets,
    detailWidgets: state.widget.detailWidgets,
    tableColumns: state.table.tableColumns,
    layoutMode: state.app.layoutMode,
    customMode: state.app.customMode,
    formGlobalConfig: state.widget.formGlobalConfig,
    detailGlobalConfig: state.widget.detailGlobalConfig,
    tableGlobalConfig: state.table.tableGlobalConfig,
    exportGlobalConfig: state.table.exportGlobalConfig,
    importGlobalConfig: state.table.importGlobalConfig,
    actionGlobalConfig: state.table.actionGlobalConfig,
    externalConfig: state.app.externalConfig,
  }));

  const [schemaModalVisible, setSchemaModalVisible] = useState(false);

  const dispatch = useDispatch<Dispatch>();

  const schema: AnyObject = useMemo(() => {
    switch (customMode) {
      case CustomMode.Detail:
        if (!isEmpty(detailGlobalConfig)) {
          return produceDetailSchema(detailWidgets, externalConfig, detailGlobalConfig);
        }
        break;
      case CustomMode.Form:
        if (!isEmpty(formGlobalConfig)) {
          return produceFormSchema(formWidgets, externalConfig, formGlobalConfig);
        }
        break;
      case CustomMode.Table:
        if (
          !isEmpty(formGlobalConfig) &&
          !isEmpty(tableGlobalConfig) &&
          !isEmpty(exportGlobalConfig) &&
          !isEmpty(importGlobalConfig) &&
          !isEmpty(actionGlobalConfig)
        ) {
          return produceTableSchema(
            formWidgets,
            tableColumns,
            externalConfig,
            formGlobalConfig,
            tableGlobalConfig,
            exportGlobalConfig,
            importGlobalConfig,
            actionGlobalConfig
          );
        }
        break;
    }
    return {};
  }, [
    customMode,
    detailWidgets,
    formWidgets,
    tableColumns,
    externalConfig,
    formGlobalConfig,
    importGlobalConfig,
    detailGlobalConfig,
    tableGlobalConfig,
    exportGlobalConfig,
    actionGlobalConfig,
  ]);

  const handleSaveJson = () => {
    const extra: any = {};
    switch (customMode) {
      case CustomMode.Detail:
        extra.widgets = detailWidgets;
        break;
      case CustomMode.Form:
        extra.widgets = formWidgets;
        break;
      case CustomMode.Table:
        extra.widgets = formWidgets;
        extra.columns = tableColumns;
        break;
    }
    message.info('')
    // http save request
  };

  return (
    <Container>
      {!noLayout && (
        <LayoutButtonContainer>
          <LayoutButton
            active={layoutMode === LayoutModeType.Pc}
            onClick={() => {
              dispatch.app.setLayoutMode(LayoutModeType.Pc);
            }}
          >
            <Icon glyph="pc" size={18} />
          </LayoutButton>
          <LayoutButton
            active={layoutMode === LayoutModeType.Mobile}
            onClick={() => {
              dispatch.app.setLayoutMode(LayoutModeType.Mobile);
            }}
          >
            <Icon glyph="mobile" size={18} />
          </LayoutButton>
        </LayoutButtonContainer>
      )}
      <ActionButtonContainer>
        <Button onClick={() => setSchemaModalVisible(true)} type="primary">
          预览 Schema
        </Button>
        <Button onClick={handleSaveJson} type="primary">
          保存
        </Button>
      </ActionButtonContainer>
      <Modal
        title={
          customMode === CustomMode.Detail ? '自定义详情 Schema 预览' : '自定义表单 Schema 预览'
        }
        open={schemaModalVisible}
        width={800}
        footer={null}
        onCancel={() => setSchemaModalVisible(false)}
      >
        <JsonEditor jsonObject={schema} height={500} />
      </Modal>
    </Container>
  );
};

export default Toolbar;
