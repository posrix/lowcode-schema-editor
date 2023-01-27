import React from 'react';
import { Input, Switch } from 'antd';
import { DetailWidgetCommonProps } from 'src/types/detail';
import { Container, ConfigFieldContainer, ConfigFieldTitle, ErrorText } from '../../styled';
import { useSelector } from 'react-redux';
import { RootState } from 'src/models/store';
import { useConfigNameValidate } from 'src/hooks/form';

export interface ConfigProps {
  commonProps: DetailWidgetCommonProps;
  handleConfigChange: (config: Partial<DetailWidgetCommonProps>) => void;
}

const DetailCommonConfig: React.FC<ConfigProps> = ({ commonProps, handleConfigChange }) => {
  const { name, title, hidden = false } = commonProps;

  const widgetNames = useSelector((state: RootState) =>
    state.widget.detailWidgets.map((widget) => widget.name)
  );

  const { handleChangeName, isDupName, isEmptyName } = useConfigNameValidate(
    handleConfigChange,
    widgetNames
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
        <ConfigFieldTitle>是否隐藏</ConfigFieldTitle>
        <Switch
          defaultChecked={hidden}
          onChange={(checked) => handleConfigChange({ hidden: checked })}
        />
      </ConfigFieldContainer>
    </Container>
  );
};

export default DetailCommonConfig;
