import React, { useEffect, useState } from 'react';
import { Button, Input, Radio, Select } from 'antd';
import { FormSelectWidget } from 'src/types/form';
import { DataSourceMode, StringObject } from 'src/types/app';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import {
  Container,
  ConfigFieldBlockContainer,
  ConfigEditorContainer,
  ConfigInnerFieldContainer,
  ConfigFieldTitle,
} from '../../../styled';

export interface OptionConfigProps {
  activeWidget: FormSelectWidget;
  handleConfigChange: (config: Partial<FormSelectWidget>) => void;
}

const OptionConfig: React.FC<OptionConfigProps> = ({ activeWidget, handleConfigChange }) => {
  const { staticDataSource, dataSource } = activeWidget;
  const [optionDataType, setOptionDataType] = useState<DataSourceMode>(activeWidget.dataSourceMode);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    handleConfigChange({
      dataSourceMode: optionDataType,
    });
  }, [optionDataType]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ConfigFieldBlockContainer>
      <ConfigFieldTitle>选项</ConfigFieldTitle>
      <Radio.Group
        onChange={(e) => setOptionDataType(e.target.value)}
        value={optionDataType}
        optionType="button"
      >
        <Radio.Button value={DataSourceMode.Static}>静态数据</Radio.Button>
        <Radio.Button value={DataSourceMode.Dynamic}>动态数据</Radio.Button>
      </Radio.Group>
      {optionDataType === DataSourceMode.Static && (
        <ConfigEditorContainer>
          <Button
            onClick={() =>
              dispatch.app.activeEditorModal({
                title: '静态数据',
                jsonObject: staticDataSource,
                handleChangeCallback: (parsedJsonObject) =>
                  handleConfigChange({
                    staticDataSource: parsedJsonObject as StringObject,
                    dataSourceMode: DataSourceMode.Static,
                  }),
              })
            }
          >
            编辑
          </Button>
        </ConfigEditorContainer>
      )}
      {optionDataType === DataSourceMode.Dynamic && (
        <Container>
          <ConfigInnerFieldContainer>
            <ConfigFieldTitle>请求地址</ConfigFieldTitle>
            <Input
              defaultValue={dataSource.uri}
              onChange={(e) =>
                handleConfigChange({ dataSource: { ...dataSource, uri: e.target.value } })
              }
            />
          </ConfigInnerFieldContainer>
          <ConfigInnerFieldContainer>
            <ConfigFieldTitle>请求方法</ConfigFieldTitle>
            <Select
              showArrow
              style={{ width: '100%' }}
              defaultValue={dataSource.method}
              onChange={(value) =>
                handleConfigChange({ dataSource: { ...dataSource, method: value } })
              }
            >
              <Select.Option value="get">GET</Select.Option>
              <Select.Option value="post">POST</Select.Option>
            </Select>
          </ConfigInnerFieldContainer>
          <ConfigEditorContainer>
            <ConfigFieldTitle>请求参数</ConfigFieldTitle>
            <Button
              onClick={() =>
                dispatch.app.activeEditorModal({
                  title: '请求参数',
                  jsonObject: dataSource.params,
                  handleChangeCallback: (parsedJsonObject) =>
                    handleConfigChange({
                      dataSource: {
                        ...dataSource,
                        params: parsedJsonObject as StringObject,
                      },
                      dataSourceMode: DataSourceMode.Dynamic,
                    }),
                })
              }
            >
              编辑
            </Button>
          </ConfigEditorContainer>
        </Container>
      )}
    </ConfigFieldBlockContainer>
  );
};

export default OptionConfig;
