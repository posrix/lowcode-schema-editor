import React, { useMemo } from 'react';
import { Button, Input, InputNumber, Select } from 'antd';
import { FormSelectWidget, FormWidget } from 'src/types/form';
import OptionConfig from './OptionConfig';
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
  activeWidget: FormSelectWidget;
  widgets: FormWidget[];
  handleConfigChange: (config: Partial<FormSelectWidget>) => void;
}

const SelectConfig: React.FC<ConfigProps> = ({ activeWidget, widgets, handleConfigChange }) => {
  const {
    componentProps,
    dependency,
    setFieldsOnChange,
    dataSource,
    selectOptions = { customOption: '' },
    customDialog,
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
        <ConfigFieldTitle>自定义弹窗组件(APP专用)</ConfigFieldTitle>
        <Input
          defaultValue={customDialog}
          onChange={(e) =>
            handleConfigChange({
              customDialog: e.target.value,
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>模式</ConfigFieldTitle>
        <Select
          showArrow
          style={{ width: '100%' }}
          defaultValue={componentProps.mode}
          onChange={(value) => handleConfigChange({ componentProps: { mode: value } })}
        >
          <Select.Option value="multiple">多选</Select.Option>
          <Select.Option value="tags">单选</Select.Option>
        </Select>
      </ConfigFieldContainer>
      <OptionConfig activeWidget={activeWidget} handleConfigChange={handleConfigChange} />
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
      <ConfigFieldContainer>
        <ConfigFieldTitle>查询参数表达式</ConfigFieldTitle>
        <Input
          defaultValue={dataSource.customQueryField}
          onChange={(e) =>
            handleConfigChange({
              dataSource: { ...dataSource, customQueryField: e.target.value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>自定义选项</ConfigFieldTitle>
        <Input
          defaultValue={selectOptions.customOption}
          onChange={(e) =>
            handleConfigChange({
              selectOptions: { ...selectOptions, customOption: e.target.value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>最大选择上限</ConfigFieldTitle>
        <InputNumber
          defaultValue={selectOptions.maxSelectCount}
          onChange={(value) =>
            handleConfigChange({
              selectOptions: { ...selectOptions, maxSelectCount: value || undefined },
            })
          }
        />
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
    </Container>
  );
};

export default SelectConfig;
