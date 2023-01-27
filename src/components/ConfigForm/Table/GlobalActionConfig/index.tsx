import React from 'react';
import { Switch, Button } from 'antd';
import { ActionGlobalConfig } from 'src/types/table';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  globalConfig: ActionGlobalConfig;
  handleGlobalConfigChange: (config: Partial<ActionGlobalConfig>) => void;
}

const GlobalActionConfig: React.FC<ConfigProps> = ({ globalConfig, handleGlobalConfigChange }) => {
  const { showAdd, showBatch, showImport, showExport } = globalConfig;

  const dispatch = useDispatch<Dispatch>();

  return (
    <Container>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否显示批量</ConfigFieldTitle>
        <Switch
          defaultChecked={showBatch}
          onChange={(checked) =>
            handleGlobalConfigChange({
              showBatch: checked,
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否显示导入</ConfigFieldTitle>
        <Switch
          defaultChecked={showImport}
          onChange={(checked) =>
            handleGlobalConfigChange({
              showImport: checked,
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否显示导出</ConfigFieldTitle>
        <Switch
          defaultChecked={showExport}
          onChange={(checked) =>
            handleGlobalConfigChange({
              showExport: checked,
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>显示新增</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '显示编辑',
              jsonObject: showAdd,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  showAdd: parsedJsonObject,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigFieldContainer>
    </Container>
  );
};

export default GlobalActionConfig;
