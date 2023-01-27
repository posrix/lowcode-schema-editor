import React from 'react';
import { Input, Switch } from 'antd';
import { FormWidget, FormTextAreaWidget } from 'src/types/form';
import ValidationRules from '../../ValidationRules';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  activeWidget: FormTextAreaWidget;
  handleConfigChange: (config: Partial<FormWidget>) => void;
}

const TextAreaConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
  const { componentProps } = activeWidget;
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
        <ConfigFieldTitle>行数</ConfigFieldTitle>
        <Input
          type="number"
          defaultValue={componentProps.rows}
          onChange={(e) =>
            handleConfigChange({
              componentProps: { ...componentProps, rows: Number(e.target.value) },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>自动调整大小</ConfigFieldTitle>
        <Switch
          defaultChecked={componentProps.autoSize}
          onChange={(checked) =>
            handleConfigChange({
              componentProps: { ...componentProps, autoSize: checked },
            })
          }
        />
      </ConfigFieldContainer>
      <ValidationRules activeWidget={activeWidget} handleConfigChange={handleConfigChange} />
    </Container>
  );
};

export default TextAreaConfig;
