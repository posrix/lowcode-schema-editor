import React, { useMemo } from 'react';
import { Button, Input, Switch } from 'antd';
import { TableColumn, TableGlobalConfig } from 'src/types/table';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import {
  Container,
  ConfigFieldContainer,
  ConfigFieldTitle,
  ConfigEditorContainer,
} from '../../styled';

export interface ConfigProps {
  columns: TableColumn[];
  globalConfig: TableGlobalConfig;
  handleGlobalConfigChange: (config: Partial<TableGlobalConfig>) => void;
}

const GlobalTableConfig: React.FC<ConfigProps> = ({
  columns,
  globalConfig,
  handleGlobalConfigChange,
}) => {
  const {
    uri,
    fields,
    initialFields,
    lockedFields,
    frozenFields,
    cellDataSource,
    defaultSort,
    primaryKey,
    showEnable,
    showDetail,
    showEdit,
    showSetting,
    otherActions,
  } = globalConfig;

  const dispatch = useDispatch<Dispatch>();

  const columnNames = useMemo(() => columns.map((column) => column.name), [columns]);

  return (
    <Container>
      <ConfigFieldContainer>
        <ConfigFieldTitle>请求地址</ConfigFieldTitle>
        <Input
          defaultValue={uri}
          onChange={(e) => handleGlobalConfigChange({ uri: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle> 默认排序</ConfigFieldTitle>
        <Input
          defaultValue={defaultSort}
          onChange={(e) => handleGlobalConfigChange({ defaultSort: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>主键</ConfigFieldTitle>
        <Input
          defaultValue={primaryKey}
          onChange={(e) => handleGlobalConfigChange({ primaryKey: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>额外数据源</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '额外数据源',
              jsonObject: { cellDataSource },
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  cellDataSource: parsedJsonObject.cellDataSource,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>全部列</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: `全部列`,
              jsonObject: { fields: fields.length ? fields : columnNames },
              helperTags: columnNames,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  fields: parsedJsonObject.fields,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>初始列</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: `可见列`,
              jsonObject: initialFields,
              helperTags: columnNames,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  initialFields: parsedJsonObject,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>锁定列</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: `锁定列`,
              jsonObject: { lockedFields },
              helperTags: columnNames,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  lockedFields: parsedJsonObject.lockedFields,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>冻结列</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: `冻结列`,
              jsonObject: { frozenFields: frozenFields || [] },
              helperTags: columnNames,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  frozenFields: parsedJsonObject.frozenFields,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>显示详情</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '详情显示',
              jsonObject: showDetail,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  showDetail: parsedJsonObject,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>显示编辑</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '显示编辑',
              jsonObject: showEdit,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  showEdit: parsedJsonObject,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>显示开启</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '开启显示',
              jsonObject: showEnable,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  showEnable: parsedJsonObject,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>操作设置</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '操作设置',
              jsonObject: { otherActions },
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  otherActions: parsedJsonObject.otherActions,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>显示设置</ConfigFieldTitle>
        <Switch
          defaultChecked={showSetting}
          onChange={(checked) =>
            handleGlobalConfigChange({
              showSetting: checked,
            })
          }
        />
      </ConfigFieldContainer>
    </Container>
  );
};

export default GlobalTableConfig;
