import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from 'src/models/store';
import { FormGlobalConfig } from 'src/types/form';
import {
  ActionGlobalConfig,
  ExportGlobalConfig,
  ImportGlobalConfig,
  TableGlobalConfig,
} from 'src/types/table';
import { Tabs } from 'antd';
import FormConfigRender from '../FormConfigPanel/FormConfigRender';
import GlobalFormConfig from 'src/components/ConfigForm/Form/GlobalFormConfig';
import GlobalTableConfig from 'src/components/ConfigForm/Table/GlobalTableConfig';
import GlobalExportConfig from 'src/components/ConfigForm/Table/GlobalExportConfig';
import GlobalActionConfig from 'src/components/ConfigForm/Table/GlobalActionConfig';
import GlobalImportConfig from 'src/components/ConfigForm/Table/GlobalImportConfig';
import { Container } from '../styled';
import { GlobalTitle } from './styled';

const TableConfigPanel: React.FC = () => {
  const {
    activeFormWidget,
    formWidgets,
    tableColumns,
    formGlobalConfig,
    tableGlobalConfig,
    exportGlobalConfig,
    importGlobalConfig,
    actionGlobalConfig,
  } = useSelector((state: RootState) => ({
    activeFormWidget: state.widget.activeFormWidget,
    formWidgets: state.widget.formWidgets,
    formGlobalConfig: state.widget.formGlobalConfig,
    tableColumns: state.table.tableColumns,
    tableGlobalConfig: state.table.tableGlobalConfig,
    exportGlobalConfig: state.table.exportGlobalConfig,
    importGlobalConfig: state.table.importGlobalConfig,
    actionGlobalConfig: state.table.actionGlobalConfig,
  }));
  const dispatch = useDispatch<Dispatch>();

  const handleFormGlobalConfigChange = useCallback(
    (config: Partial<FormGlobalConfig>) => {
      dispatch.widget.configFormGlobal({ config });
    },
    [dispatch.widget]
  );

  const handleTableGlobalConfigChange = useCallback(
    (config: Partial<TableGlobalConfig>) => {
      dispatch.table.configTableGlobal({ config });
    },
    [dispatch.table]
  );

  const handleImportGlobalConfigChange = useCallback(
    (config: Partial<ImportGlobalConfig>) => {
      dispatch.table.configImportGlobal({ config });
    },
    [dispatch.table]
  );

  const handleExportGlobalConfigChange = useCallback(
    (config: Partial<ExportGlobalConfig>) => {
      dispatch.table.configExportGlobal({ config });
    },
    [dispatch.table]
  );

  const handleActionGlobalConfigChange = useCallback(
    (config: Partial<ActionGlobalConfig>) => {
      dispatch.table.configActionGlobal({ config });
    },
    [dispatch.table]
  );

  return (
    <Tabs defaultActiveKey="1" centered>
      <Tabs.TabPane tab="搜索控件配置" key="1">
        <Container>
          <FormConfigRender activeFormWidget={activeFormWidget} formWidgets={formWidgets} />
        </Container>
      </Tabs.TabPane>
      <Tabs.TabPane tab="全局配置" key="2">
        <Container>
          <GlobalTitle>搜索配置</GlobalTitle>
          <GlobalFormConfig
            widgets={formWidgets}
            globalConfig={formGlobalConfig}
            handleGlobalConfigChange={handleFormGlobalConfigChange}
          />
        </Container>
        <Container>
          <GlobalTitle>表格配置</GlobalTitle>
          <GlobalTableConfig
            columns={tableColumns}
            globalConfig={tableGlobalConfig}
            handleGlobalConfigChange={handleTableGlobalConfigChange}
          />
        </Container>
        <Container>
          <GlobalTitle>导入配置</GlobalTitle>
          <GlobalImportConfig
            globalConfig={importGlobalConfig}
            handleGlobalConfigChange={handleImportGlobalConfigChange}
          />
        </Container>
        <Container>
          <GlobalTitle>导出配置</GlobalTitle>
          <GlobalExportConfig
            globalConfig={exportGlobalConfig}
            handleGlobalConfigChange={handleExportGlobalConfigChange}
          />
        </Container>
        <Container>
          <GlobalTitle>动作配置</GlobalTitle>
          <GlobalActionConfig
            globalConfig={actionGlobalConfig}
            handleGlobalConfigChange={handleActionGlobalConfigChange}
          />
        </Container>
      </Tabs.TabPane>
    </Tabs>
  );
};

export default TableConfigPanel;
