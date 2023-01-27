import React, { useMemo } from 'react';
import { Button, Input } from 'antd';
import { DetailGlobalConfig, DetailWidget } from 'src/types/detail';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import {
  Container,
  ConfigFieldContainer,
  ConfigFieldTitle,
  ConfigEditorContainer,
} from '../../styled';

export interface ConfigProps {
  widgets: DetailWidget[];
  globalConfig: DetailGlobalConfig;
  handleGlobalConfigChange: (config: Partial<DetailGlobalConfig>) => void;
}

const GlobalDetailConfig: React.FC<ConfigProps> = ({
  widgets,
  globalConfig,
  handleGlobalConfigChange,
}) => {
  const { uri, params, fields } = globalConfig;

  const dispatch = useDispatch<Dispatch>();

  const widgetNames = useMemo(() => widgets.map((widget) => widget.name), [widgets]);

  return (
    <Container>
      <ConfigFieldContainer>
        <ConfigFieldTitle>请求地址</ConfigFieldTitle>
        <Input
          defaultValue={uri}
          onChange={(e) => handleGlobalConfigChange({ uri: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>参数</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '参数',
              jsonObject: params,
              handleChangeCallback: (parsedJsonObject) =>
                handleGlobalConfigChange({
                  params: parsedJsonObject,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>字段分组</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: `字段分组`,
              helperTags: widgetNames,
              jsonObject: { fields: fields.length ? fields : widgetNames },
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
    </Container>
  );
};

export default GlobalDetailConfig;
