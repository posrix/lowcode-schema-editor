import React, { useMemo } from 'react';
import { Input, Switch, Select, Button } from 'antd';
import { FormCustomWidget, FormWidget } from 'src/types/form';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'src/models/store';
import {
  Container,
  ConfigFieldContainer,
  ConfigFieldTitle,
  ConfigEditorContainer,
} from '../../styled';

export interface ConfigProps {
  widgets: FormWidget[];
  activeWidget: FormCustomWidget;
  handleConfigChange: (config: Partial<FormCustomWidget>) => void;
}

const CustomConfig: React.FC<ConfigProps> = ({ widgets, activeWidget, handleConfigChange }) => {
  const {
    appCustomComponent,
    dependency,
    setFieldsOnChange,
    componentProps,
    autoFillOnlyOne,
  } = activeWidget;

  const dispatch = useDispatch<Dispatch>();

  const otherWidgetNames = useMemo(
    () =>
      widgets.filter((widget) => widget.name !== activeWidget.name).map((widget) => widget.name),
    [activeWidget, widgets]
  );

  return (
    <Container>
      <FormCommonConfig
        commonProps={pick(activeWidget, [
          'name',
          'title',
          'description',
          'required',
          'userCreated',
          'hidden',
          'useInteractive',
          'query',
        ])}
        handleConfigChange={handleConfigChange}
      />
      <ConfigFieldContainer>
        <ConfigFieldTitle>自定义组件名</ConfigFieldTitle>
        <Input
          defaultValue={appCustomComponent}
          onChange={(e) => handleConfigChange({ appCustomComponent: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否唯一自动填充</ConfigFieldTitle>
        <Switch
          defaultChecked={autoFillOnlyOne}
          onChange={(checked) => handleConfigChange({ autoFillOnlyOne: checked })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>依赖字段</ConfigFieldTitle>
        <Select
          showArrow
          defaultValue={dependency.fields}
          mode="multiple"
          style={{ width: '100%' }}
          onChange={(value) => handleConfigChange({ dependency: { fields: value } })}
        >
          {otherWidgetNames.map((name) => (
            <Select.Option value={name} key={name}>
              {name}
            </Select.Option>
          ))}
        </Select>
      </ConfigFieldContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>联动设值</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '联动设值',
              jsonObject: { setFieldsOnChange },
              handleChangeCallback: (parsedJsonObject) =>
                handleConfigChange({
                  setFieldsOnChange: parsedJsonObject.setFieldsOnChange,
                }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
      <ConfigEditorContainer>
        <ConfigFieldTitle>自定义组件参数</ConfigFieldTitle>
        <Button
          onClick={() =>
            dispatch.app.activeEditorModal({
              title: '自定义组件参数',
              jsonObject: componentProps,
              handleChangeCallback: (parsedJsonObject) =>
                handleConfigChange({ componentProps: parsedJsonObject }),
            })
          }
        >
          编辑
        </Button>
      </ConfigEditorContainer>
    </Container>
  );
};

export default CustomConfig;
