import React from 'react';
import { Button, Select, Switch } from 'antd';
import { DetailDefaultWidget } from 'src/types/detail';
import { StringObject, DetailSchemaType } from 'src/types/app';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import DetailCommonConfig from '../DetailCommonConfig';
import { pick } from 'lodash';
import {
  Container,
  ConfigFieldContainer,
  ConfigFieldTitle,
  ConfigEditorContainer,
} from '../../styled';

export interface ConfigProps {
  activeWidget: DetailDefaultWidget;
  handleConfigChange: (config: Partial<DetailDefaultWidget>) => void;
}

const LabelConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
  const { appearance, staticDataSource, type, userCreated } = activeWidget;

  const dispatch = useDispatch<Dispatch>();

  return (
    <Container>
      <DetailCommonConfig
        commonProps={pick(activeWidget, ['name', 'title', 'hidden'])}
        handleConfigChange={handleConfigChange}
      />
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否为用户自定义字段</ConfigFieldTitle>
        <Switch
          defaultChecked={userCreated}
          onChange={(checked) => handleConfigChange({ userCreated: checked })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>数据类型</ConfigFieldTitle>
        <Select
          style={{ width: 220 }}
          defaultValue={type}
          onChange={(value) =>
            handleConfigChange({
              type: value,
            })
          }
        >
          <Select.Option value={DetailSchemaType.String}>字符串</Select.Option>
          <Select.Option value={DetailSchemaType.ImageList}>图片</Select.Option>
          <Select.Option value={DetailSchemaType.VideoList}>视频</Select.Option>
          <Select.Option value={DetailSchemaType.DocumentList}>文档</Select.Option>
          <Select.Option value={DetailSchemaType.Date}>日期</Select.Option>
        </Select>
      </ConfigFieldContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>外观</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '外观',
              jsonObject: appearance,
              handleChangeCallback: (parsedJsonObject) =>
                handleConfigChange({ appearance: parsedJsonObject }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>静态数据源</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '静态数据源',
              jsonObject: staticDataSource,
              handleChangeCallback: (parsedJsonObject) =>
                handleConfigChange({
                  staticDataSource: parsedJsonObject as StringObject,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
    </Container>
  );
};

export default LabelConfig;
