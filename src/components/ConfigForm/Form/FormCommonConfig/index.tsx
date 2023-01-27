import React from 'react';
import { Input, Switch } from 'antd';
import { FormWidgetCommonProps } from 'src/types/form';
import { useSelector } from 'react-redux';
import { RootState } from 'src/models/store';
import { useConfigNameValidate } from 'src/hooks/form';
import { CustomMode } from 'src/types/app';
import { Container, ConfigFieldContainer, ConfigFieldTitle, ErrorText } from '../../styled';

export interface ConfigProps {
  commonProps: FormWidgetCommonProps;
  handleConfigChange: (config: Partial<FormWidgetCommonProps>) => void;
}

const FormCommonConfig: React.FC<ConfigProps> = ({ commonProps, handleConfigChange }) => {
  const {
    name,
    title,
    description,
    required,
    userCreated = false,
    hidden = false,
    // Compat with old widget data
    useInteractive = { preventDefaultTouchEvent: false },
    // Table search configuration
    query,
  } = commonProps;
  const { customMode, formWidgetNames } = useSelector((state: RootState) => ({
    customMode: state.app.customMode,
    formWidgetNames: state.widget.formWidgets.map((widget) => widget.name),
  }));

  const { handleChangeName, isDupName, isEmptyName } = useConfigNameValidate(
    handleConfigChange,
    formWidgetNames
  );

  return (
    <Container>
      <ConfigFieldContainer>
        <ConfigFieldTitle>字段标识</ConfigFieldTitle>
        <Input
          defaultValue={name}
          status={isDupName || isEmptyName ? 'error' : ''}
          onChange={handleChangeName}
        />
        <ErrorText show={isDupName}>字段标识不能重复</ErrorText>
        <ErrorText show={isEmptyName}>字段标识不能为空</ErrorText>
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>标题</ConfigFieldTitle>
        <Input
          defaultValue={title}
          onChange={(e) => handleConfigChange({ title: e.target.value })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>占位内容</ConfigFieldTitle>
        <Input
          defaultValue={description}
          onChange={(e) => handleConfigChange({ description: e.target.value })}
        />
      </ConfigFieldContainer>
      {customMode === CustomMode.Table && (
        <ConfigFieldContainer>
          <ConfigFieldTitle>查询表达式</ConfigFieldTitle>
          <Input
            defaultValue={query?.searchExp ? query?.searchExp : ''}
            onChange={(e) => handleConfigChange({ query: { searchExp: e.target.value } })}
          />
        </ConfigFieldContainer>
      )}
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否必填</ConfigFieldTitle>
        <Switch
          defaultChecked={required}
          onChange={(checked) => handleConfigChange({ required: checked })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否隐藏</ConfigFieldTitle>
        <Switch
          defaultChecked={hidden}
          onChange={(checked) => handleConfigChange({ hidden: checked })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否为用户自定义字段</ConfigFieldTitle>
        <Switch
          defaultChecked={userCreated}
          onChange={(checked) => handleConfigChange({ userCreated: checked })}
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>是否允许交互</ConfigFieldTitle>
        <Switch
          defaultChecked={useInteractive.preventDefaultTouchEvent}
          onChange={(checked) =>
            handleConfigChange({ useInteractive: { preventDefaultTouchEvent: checked } })
          }
        />
      </ConfigFieldContainer>
    </Container>
  );
};

export default FormCommonConfig;
