import React from 'react';
import { FormWidget, FormInputWidget, FormPasswordWidget } from 'src/types/form';
import ValidationRules from '../../ValidationRules';
import FormCommonConfig from '../FormCommonConfig';
import { pick } from 'lodash';
import { Container } from '../../styled';

export interface ConfigProps {
  activeWidget: FormInputWidget | FormPasswordWidget;
  handleConfigChange: (config: Partial<FormWidget>) => void;
}

const InputConfig: React.FC<ConfigProps> = ({ activeWidget, handleConfigChange }) => {
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
      <ValidationRules activeWidget={activeWidget} handleConfigChange={handleConfigChange} />
    </Container>
  );
};

export default InputConfig;
