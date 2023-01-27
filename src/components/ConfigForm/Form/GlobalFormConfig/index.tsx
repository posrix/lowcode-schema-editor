import React, { useMemo } from 'react';
import { Button, Input } from 'antd';
import { FormWidget, FormGlobalConfig } from 'src/types/form';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from 'src/models/store';
import { CustomMode } from 'src/types/app';
import {
  Container,
  ConfigFieldContainer,
  ConfigFieldTitle,
  ConfigEditorContainer,
} from '../../styled';

export interface ConfigProps {
  widgets: FormWidget[];
  globalConfig: FormGlobalConfig;
  handleGlobalConfigChange: (config: Partial<FormGlobalConfig>) => void;
}

const GlobalFormConfig: React.FC<ConfigProps> = ({
  widgets,
  globalConfig,
  handleGlobalConfigChange,
}) => {
  const customMode = useSelector((state: RootState) => state.app.customMode);
  const { uri, name, title, fields } = globalConfig;

  const dispatch = useDispatch<Dispatch>();

  const widgetNames = useMemo(() => widgets.map((widget) => widget.name), [widgets]);

  return (
    <Container>
      {customMode !== CustomMode.Table && (
        <>
          <ConfigFieldContainer>
            <ConfigFieldTitle>请求地址</ConfigFieldTitle>
            <Input
              defaultValue={uri}
              onChange={(e) => handleGlobalConfigChange({ uri: e.target.value })}
            />
          </ConfigFieldContainer>
          <ConfigFieldContainer>
            <ConfigFieldTitle>表单名</ConfigFieldTitle>
            <Input
              defaultValue={title}
              onChange={(e) => handleGlobalConfigChange({ title: e.target.value })}
            />
          </ConfigFieldContainer>
          <ConfigFieldContainer>
            <ConfigFieldTitle>表单标识</ConfigFieldTitle>
            <Input
              defaultValue={name}
              onChange={(e) => handleGlobalConfigChange({ name: e.target.value })}
            />
          </ConfigFieldContainer>
        </>
      )}
      <ConfigEditorContainer>
        <ConfigFieldTitle>字段分组</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: `字段分组`,
              jsonObject: { fields: fields.length ? fields : widgetNames },
              helperTags: widgetNames,
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

export default React.memo(GlobalFormConfig);
