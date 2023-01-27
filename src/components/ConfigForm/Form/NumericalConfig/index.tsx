import React from 'react';
import { InputNumber } from 'antd';
import { FormWidget, FormNumericalWidget } from 'src/types/form';
import ValidationRules from '../../ValidationRules';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
import { Container, ConfigFieldContainer, ConfigFieldTitle } from '../../styled';

export interface ConfigProps {
  activeWidget: FormNumericalWidget;
  handleConfigChange: (config: Partial<FormWidget>) => void;
}

const NumericalConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
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
        <ConfigFieldTitle>min</ConfigFieldTitle>
        <InputNumber
          defaultValue={componentProps.min}
          onChange={(value) =>
            handleConfigChange({
              componentProps: { ...componentProps, min: value },
            })
          }
        />
      </ConfigFieldContainer>
      <ConfigFieldContainer>
        <ConfigFieldTitle>max</ConfigFieldTitle>
        <InputNumber
          defaultValue={componentProps.max}
          onChange={(value) =>
            handleConfigChange({
              componentProps: { ...componentProps, max: value },
            })
          }
        />
      </ConfigFieldContainer>
      <ValidationRules activeWidget={activeWidget} handleConfigChange={handleConfigChange} />
    </Container>
  );
};

export default NumericalConfig;
